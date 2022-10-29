import {configureStore} from '@reduxjs/toolkit'
import moive_slice from './Slices/moive_slice'
import fav_slice from './Slices/fav_slice'
export const store=configureStore({reducer:{moive_slice,fav_slice}})