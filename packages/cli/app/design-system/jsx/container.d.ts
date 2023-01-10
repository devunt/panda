import { FunctionComponent } from 'react'
import { ContainerProperties } from '../patterns/container'
import { HTMLPandaProps } from '../types/jsx'

export type ContainerProps = ContainerProperties & Omit<HTMLPandaProps<'div'>, keyof ContainerProperties >


export declare const Container: FunctionComponent<ContainerProps>