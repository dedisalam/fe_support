import React from 'react';
import { Card } from '@atoms';
import { Button } from '@molecules';
import type { CardButton as Props } from '@props/molecules';

export default function Component(props: Props): JSX.Element {
  const { children, title, button } = props;

  let btn;
  switch (button.type) {
    case 'add':
      btn = <Button.Add href={button.links} />;
      break;
    case 'edit':
      btn = <Button.Edit href={button.links} />;
      break;

    default:
      btn = '';
      break;
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between lh-base">
          {title}
          {btn}
        </Card.Title>
        <hr />
        {children}
      </Card.Body>
    </Card>
  );
}
