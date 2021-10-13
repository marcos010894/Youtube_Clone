import * as React from 'react';
import { useState } from 'react';

export default function AlterState(){
  const [valueDrawer, setvalueDrawer] = useState("true")
  if(valueDrawer == "true"){
    setvalueDrawer("false");
  }else{
    setvalueDrawer("true");
  }
  return(
    valueDrawer
  )
}