import React from "react";

type Props = {
  bg: string;
};

const Light: React.FC<Props> = ({ bg }: Props) => {
  return <div className={`rounded-full w-10 h-10 bg ${bg} `}></div>;
};

export default Light;
