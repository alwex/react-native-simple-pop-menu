import { Portal } from '@gorhom/portal'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import * as Animatable from 'react-native-animatable'

import { useOpenable } from '../hook/useOpenable'

export interface PopMenuItem {
  render: () => React.ReactElement
  onPress?: () => void
}

interface Props {
  items: PopMenuItem[]
  onPress?: () => void
  trigger?: 'press' | 'longPress'
  minWidth?: number
  containerStyle?: ViewStyle
  animationIn?: string
  animationOut?: string
}

const AnimatedPressable = Animatable.createAnimatableComponent(Pressable)
const AnimatedView = Animatable.createAnimatableComponent(View)

const fadeInDuration = 500
const zoomInDuration = 250

export const PopMenu: React.FC<Props> = ({
  children,
  items,
  trigger = 'press',
  onPress = () => {},
  minWidth = 200,
  animationIn = 'zoomIn',
  animationOut = 'zoomOut',
}) => {
  const { isOpen, open, close } = useOpenable()

  const overlayRef = useRef<any>(null)
  const menuRef = useRef<any>(null)
  const ref = useRef<View>(null)

  const [positionStyle, setPositionStyle] = useState<any>({})

  const onOpen = useCallback(async () => {
    ref.current?.measure((x, y, width, height, pageX, pageY) => {
      const windowWidth = Dimensions.get('window').width
      const windowHeight = Dimensions.get('window').height

      let position: any = {}
      if (pageY > windowHeight / 2) {
        position.bottom = windowHeight - pageY
      } else {
        position.top = pageY + height
      }

      if (pageX > windowWidth / 2) {
        position.right = windowWidth - pageX
      } else {
        position.left = pageX
      }

      position.minWidth = minWidth

      setPositionStyle(position)
      open()
    })
  }, [ref, minWidth, open])

  const onClose = useCallback(
    async (callback?: () => void) => {
      menuRef.current.[animationOut](zoomInDuration)
      callback && callback()
      await overlayRef.current?.fadeOut(fadeInDuration)
      close()
    },
    [close]
  )

  const pressableProps = useMemo(() => {
    return trigger === 'longPress'
      ? { onPress: onPress, onLongPress: onOpen }
      : { onPress: onOpen }
  }, [trigger, onPress, onOpen])

  return (
    <>
      {isOpen && (
        <Portal>
          <AnimatedPressable
            ref={overlayRef}
            onPress={() => onClose()}
            animation='fadeIn'
            duration={fadeInDuration}
            useNativeDriver
            style={styles.overlay}
          />

          <AnimatedView
            ref={menuRef}
            animation={animationIn}
            duration={zoomInDuration}
            // useNativeDriver
            style={[styles.container, positionStyle]}
          >
            {items.map((item, index) => {
              return (
                <View key={index}>
                  {item.onPress && (
                    <TouchableOpacity
                      onPress={() => {
                        onClose(item.onPress)
                      }}
                    >
                      {item.render()}
                    </TouchableOpacity>
                  )}
                  {!item.onPress && <View>{item.render()}</View>}
                </View>
              )
            })}
          </AnimatedView>
        </Portal>
      )}
      <View ref={ref} collapsable={false}>
        <TouchableOpacity {...pressableProps} activeOpacity={0.7}>
          {children}
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  overlay: {
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 10,
  },
})
