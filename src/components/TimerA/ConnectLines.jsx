import React from "react";
import Xarrow from "react-xarrows";
const ConnectLines = () => {
  return (
    <>
      <Xarrow
        key="mux-to-tar"
        color="black"
        strokeWidth={2}
        showHead={false}
        start="multiplexer"
        end="countertar"
      />
      <Xarrow
        key="aclk-to-mux"
        color="black"
        strokeWidth={2}
        endAnchor={{ position: "auto", offset: { y: -12 } }}
        start="aclk"
        end="multiplexer"
      />
      <Xarrow
        key="smclk-to-mux"
        color="black"
        strokeWidth={2}
        endAnchor={{ position: "auto", offset: { y: 12 } }}
        start="smclk"
        end="multiplexer"
      />
      <Xarrow
        key="ta0-to-tar"
        color="black"
        strokeWidth={2}
        path="grid"
        endAnchor="left"
        startAnchor="top"
        end="tar"
        start="0"
      />
      {[0, 1, 2].map((item, index) => (
        <Xarrow
          key={`ccta${index}-to-tar`}
          color="black"
          strokeWidth={2}
          path="grid"
          endAnchor="right"
          startAnchor="bottom"
          end={item.toString()}
          start="tar"
        />
      ))}
    </>
  );
};

export default ConnectLines;
