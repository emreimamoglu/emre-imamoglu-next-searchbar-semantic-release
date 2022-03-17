import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '../components/Searchbar/Searchbar'
export default function Home() {
  return (
   <SearchBar scale={0.7} searchBoxBackground="#1776D1" searchIconBackground='#1776D1' searchIconColor='white' />
  )
}
