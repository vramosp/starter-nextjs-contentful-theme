import * as React from 'react';
import classNames from 'classnames';
import Link from '../Link';
import { iconMap } from '../../svgs';
import * as types from '../../../types/sourcebit';
import { Annotations } from '../../../types/stackbit';

export type SocialProps = types.Social & Annotations & { className?: string };

export default function Social(props: SocialProps) {
    const { label, altText, url, icon = 'facebook', style = 'link', className, elementId } = props;
    const IconComponent = iconMap[icon];
    const fieldPath = props['data-sb-field-path'] ?? '';
    const annotations = fieldPath
        ? {
              'data-sb-field-path': [
                  fieldPath,
                  `${fieldPath}.url#@href`,
                  `${fieldPath}.altText#@aria-label`,
                  `${fieldPath}.elementId#@id`,
                  `${fieldPath}.label#span[1]`,
                  `${fieldPath}.icon#svg[1]`
              ]
                  .join(' ')
                  .trim()
          }
        : {};

    return (
        <Link
            href={url}
            aria-label={altText}
            id={elementId}
            className={classNames('sb-component', 'sb-component-block', 'sb-component-social', className, {
                'sb-component-social-primary': style === 'primary',
                'sb-component-social-secondary': style === 'secondary'
            })}
            {...annotations}
        >
            {label && <span className="sr-only">{label}</span>}
            {IconComponent && <IconComponent className="fill-current h-5 w-5" />}
        </Link>
    );
}
