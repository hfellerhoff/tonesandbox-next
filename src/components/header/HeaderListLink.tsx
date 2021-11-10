import React, { useState } from 'react';
import { Box, Flex, Heading } from 'theme-ui';
import Link from '../core/Link';

interface Props {
  options: string[];
  defaultValue: string;
}

const HeaderListLink: React.FC<Props> = ({ options, defaultValue }) => {
  const [isHovered, setIsHovered] = useState(true);

  const defaultSplit = defaultValue.split('/');
  const defaultValueText = defaultSplit[defaultSplit.length - 1];

  const optionTextArray: string[] = [];

  options.forEach((option) => {
    const split = option.split('/');
    if (split.length === 1 || split[0] === defaultSplit[0])
      optionTextArray.push(split[split.length - 1]);
  });

  const restOfOptions = optionTextArray.filter(
    (option) => option !== defaultValue
  );

  const getURL = (option: string) =>
    `/${(
      options.find((o) =>
        o.toLowerCase().includes(option.toLowerCase())
      ) as string
    ).toLowerCase()}`;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '10rem',
      }}
      onMouseEnter={(e) => setIsHovered(true)}
      onMouseLeave={(e) => setIsHovered(false)}
    >
      <Link href={getURL(defaultValue)}>
        <Flex
          sx={{
            top: 0,
            left: 0,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: '1px solid #454545',
            width: '10rem',
            height: '4rem',
            '&:hover': {
              cursor: 'pointer',
              background:
                'linear-gradient(to bottom right, #FDBB2D 0%, #3A1C71 100%)',
              color: 'white',
            },
          }}
        >
          <Heading
            as='h3'
            sx={{
              fontSize: 3,
            }}
          >
            {defaultValueText}
          </Heading>
        </Flex>
      </Link>
      {isHovered &&
        restOfOptions.map((option, i) => (
          <Link href={getURL(option)} key={option}>
            <Flex
              sx={{
                top: `${(i + 1) * 4}rem`,
                left: 0,
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #454545',
                background: 'inherit',
                width: '10rem',
                height: '4rem',
                '&:hover': {
                  cursor: 'pointer',
                  background:
                    'linear-gradient(to bottom right, #FDBB2D 0%, #3A1C71 100%)',
                  color: 'white',
                },
              }}
            >
              <Heading
                as='h3'
                sx={{
                  fontSize: 3,
                }}
              >
                {option}
              </Heading>
            </Flex>
          </Link>
        ))}
    </Box>
  );
};

export default HeaderListLink;
