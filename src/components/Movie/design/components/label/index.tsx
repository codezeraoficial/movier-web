import React from 'react';

interface LabelBig{
  label: string
}
interface LabelMedium{
  label: string
}
interface LabelSmall{
  label: string
}

const LabelBig: React.FC<LabelBig> = ({label}) => {
  return <h1 className="labelBig">{label}</h1>;
}

const LabelMedium: React.FC<LabelMedium> = ({label}) => {
  return <h3 className="labelMedium">{label}</h3>;
}

const LabelSmall: React.FC<LabelSmall> = ({label}) => {
  return <h4 className="labelSmall">{label}</h4>;
}

export  {
  LabelBig,
  LabelMedium,
  LabelSmall
} 