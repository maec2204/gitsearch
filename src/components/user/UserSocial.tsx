import React from 'react';

type UserSocialProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  href?: string;
  iconClassName?: string;
  textClassName?: string;
};

function UserSocial({ Icon, text, href, iconClassName, textClassName }: UserSocialProps): JSX.Element {
  return (
    <div className="relative">
      <Icon className={`text-darkSky ${iconClassName}`} />
      {href ? (
        <a
          href={href}
          className={`font-normal text-sm leading-5 text-darkSky absolute top-0 left-8 no-underline ${textClassName}`}
        >
          {text}
        </a>
      ) : (
        <h3 className={`font-normal text-sm leading-5 text-darkSky absolute top-0 left-8 ${textClassName}`}>
          {text}
        </h3>
      )}
    </div>
  );
}

export default UserSocial;