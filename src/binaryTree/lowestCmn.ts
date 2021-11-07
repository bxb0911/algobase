import { Node } from "./binaryTree";

type Info = {
  hasO1: boolean;
  hasO2: boolean;
  common: Node | null;
};

export function lowestCommon(head: Node, o1: Node, o2: Node): Node | null {
  const { common } = process(head, o1, o2);
  return common;
}

function process(head: Node | null, o1: Node, o2: Node): Info {
  if (head === null) {
    return {
      hasO1: false,
      hasO2: false,
      common: null,
    };
  }
  let leftInfo = process(head.left, o1, o2),
    rightInfo = process(head.right, o1, o2);

  if (leftInfo.common || rightInfo.common) {
    return {
      hasO1: true,
      hasO2: true,
      common: leftInfo.common || rightInfo.common,
    };
  }
  if (
    (leftInfo.hasO1 && rightInfo.hasO2) ||
    (leftInfo.hasO2 && rightInfo.hasO1)
  ) {
    return {
      hasO1: true,
      hasO2: true,
      common: head,
    };
  }
  if (leftInfo.hasO1 || rightInfo.hasO1) {
    return {
      hasO1: true,
      hasO2: head === o2,
      common: head === o2 ? head : null,
    };
  }
  if (leftInfo.hasO2 || rightInfo.hasO2) {
    return {
      hasO1: head === o1,
      hasO2: true,
      common: head === o1 ? head : null,
    };
  }

  return {
    hasO1: head === o1,
    hasO2: head === o2,
    common: null,
  };
}
