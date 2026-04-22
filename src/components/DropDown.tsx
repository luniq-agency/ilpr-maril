'use client';

import { ReactNode, useState } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export default function DropDown(props: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="dropdown-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <span className="navlink">{props.title}</span>
      <div
        className={visible ? 'dropdown-container dropdown-active' : 'dropdown-container'}
        onMouseLeave={() => setVisible(false)}
      >
        <div className="column gap-s">{props.children}</div>
      </div>
    </div>
  );
}
