import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type CardProps = {
  children: ReactNode;
  gradientColors?: string[]; // For gradient background
  backgroundColor?: string; // Non-gradient background color
  backgroundImage?: string; // URL for background image
  opacity?: number;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  shadow?: boolean;
  shadowColor?: string;
  shadowOffsetWidth?: number;
  shadowOffsetHeight?: number;
  shadowOpacity?: number;
  shadowRadius?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  borderColor?: string;
  borderWidthTop?: number;
  borderWidthBottom?: number;
  borderWidthLeft?: number;
  borderWidthRight?: number;

  borderStyle?: 'solid' | 'dotted' | 'dashed';
  width?: any;
  height?: any;
  overflow?: 'hidden' | 'visible' | 'scroll';
  zIndex?: number;
  textAlign?: 'left' | 'center' | 'right';
  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  transform?: {rotate?: number};
  marginVertical: any;
  marginHorizontal: any;
  paddingHorizontal: any;
  paddingVertical: any;
};

const Card: React.FC<CardProps> = ({
  children,
  gradientColors,
  backgroundColor,
  backgroundImage,
  opacity,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  shadow,
  shadowColor,
  shadowOffsetWidth,
  shadowOffsetHeight,
  shadowOpacity,
  shadowRadius,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  borderColor,
  borderWidthTop,
  borderWidthBottom,
  borderWidthLeft,
  borderWidthRight,
  borderStyle,
  width,
  height,
  overflow,
  zIndex,
  textAlign,
  position,
  top,
  bottom,
  left,
  right,
  flexDirection,
  justifyContent,
  alignItems,
  transform,
  marginVertical,
  marginHorizontal,
  paddingHorizontal,
  paddingVertical,
}) => {
  const cardStyle: ViewStyle = {
    backgroundColor: gradientColors ? 'transparent' : backgroundColor || '#fff',
    opacity: opacity || 1,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    marginRight: marginRight,
    width: width,
    height: height,
    borderRadius: borderRadius,
    borderColor: borderColor || '#000',
    borderTopLeftRadius: borderTopLeftRadius || 8,
    borderTopRightRadius: borderTopRightRadius || 8,
    borderBottomLeftRadius: borderBottomLeftRadius || 8,
    borderBottomRightRadius: borderBottomRightRadius || 8,
    borderTopWidth: borderWidthTop || 0,
    borderBottomWidth: borderWidthBottom || 0,
    borderLeftWidth: borderWidthLeft || 0,
    borderRightWidth: borderWidthRight || 0,
    borderStyle: borderStyle || 'solid',
    shadowColor: shadow ? shadowColor || '#000' : undefined,
    shadowOffset: shadow
      ? {width: shadowOffsetWidth || 0, height: shadowOffsetHeight || 2}
      : undefined,
    shadowOpacity: shadow ? shadowOpacity || 0.8 : 0,
    shadowRadius: shadow ? shadowRadius || 2 : undefined,
    overflow: overflow,
    zIndex: zIndex || 0,
    textAlign: textAlign || 'center' || '',
    position: position,
    top: top || 0,
    bottom: bottom || 0,
    left: left || 0,
    right: right || 0,
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    transform: transform ? [{rotate: `${transform.rotate}deg`}] : undefined,
    marginHorizontal: marginHorizontal,
    marginVertical: marginVertical,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
  };

  if (gradientColors) {
    return (
      <LinearGradient colors={gradientColors} style={[styles.card, cardStyle]}>
        {children}
      </LinearGradient>
    );
  }

  return <View style={[cardStyle]}>{children}</View>;
};

const styles = StyleSheet.create({});

export default Card;
