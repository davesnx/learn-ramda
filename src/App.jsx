import React, { Suspense, Fragment, useState } from 'react'
import styled from '@emotion/styled'
import { keyframes } from 'emotion'
import { css } from '@emotion/core'
import Select, { components } from 'react-select'
import * as R from 'ramda'

import colors from './colors.js'
import { slug, unslug } from './lib/slug'
import RamdaIcon from './icons/ramda.jsx'
import GithubIcon from './icons/github.jsx'
import Solutions from './solutions.jsx'

const fadeUp = keyframes`
  0%  {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Header = styled.div`
  padding: 8vh 8vw 12vh;

  @media (max-width: 1200px) {
    padding: 4vh 4vw;
    width: 100%;
  }
`;

const SelectWrapper = styled.div`
  min-width: 200px;
  margin: 0 20px;
  line-height: 1.2;

  @media (max-width: 1200px) {
    min-width: 30vw;
    margin: 20px;
    margin-left: 0;
    align-self: normal;
  }

  @media (max-width: 600px) {
    min-width: 300px;
  }
`;

const SelectWrapperBig = styled.div`
  flex: 1;
  min-width: 320px;
  margin-left: 20px;
  line-height: 1.2;

  @media (max-width: 1200px) {
    min-width: 30vw;
    margin: 20px;
    margin-left: 0;
    align-self: normal;
  }

  @media (max-width: 600px) {
    min-width: 300px;
  }
`;

const Sentence = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: 24px;
  line-height: 1.25;

  @media (max-width: 1200px) {
    font-size: 20px;
    line-height: 1;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3vh;

  @media (max-width: 600px) {
    margin-bottom: 3vh;

    flex-direction: column;
    align-items: flex-start;
  }
`;

const Description = styled.p`
  margin: 0;
  opacity: 0.6;
  font-size: 12px;

  @media (max-width: 600px) {
    margin-bottom: 1vh;
  }
`;

const StyledLink = css`
  margin: 0;
  opacity: 0.6;
  font-size: 12px;

  &:hover {
    opacity: 0.8;
  }
`;

const Version = styled.a`
  ${StyledLink}
`;

const Content = styled.main`
  padding: 8vh 8vw 15vh;

  @media (max-width: 1200px) {
    padding: 8vh 4vw;
    width: 100%;
  }

  background-color: rgba(0, 0, 0, 0.03);
  animation: ${fadeUp} 500ms cubic-bezier(0.175, 0.885, 0.32, 1.15);
`;

const customStyles = {
  indicatorSeparator: () => ({
    display: "none"
  })
};

const customTheme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: colors.black,
    primary75: colors.grey,
    primary50: colors.grey,
    primary25: colors.grey
  }
});

const OptionItem = styled.div`
  display: flex;
  align-items: center;
`;

const OptionIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  min-width: 20px;
  padding-left: 12px;
  text-align: center;
  background-color: ${props =>
    props.isFocused ? "rgba(0, 0, 0, 0.05)" : "transparent"};

  color: rgba(42, 39, 52, 0.6);
  min-height: 44px;

  @media (max-width: 1200px) {
    min-height: 40px;
  }
`;

const Option = props => {
  return (
    <OptionItem>
      <OptionIcon isFocused={props.isFocused}>
        {typeIcons[props.label]}
      </OptionIcon>
      <components.Option {...props} style={{ paddingLeft: 0 }} />
    </OptionItem>
  );
};

const GithubLink = styled.a`
  ${StyledLink}

  display: flex;
  justify-content: center;
  align-items: center;
`;

const typeIcons = {
  list: "[]",
  object: "{}",
  function: "fn",
  logic: "if",
  relation: ">=",
  math: "+/"
};

const App = props => {
  const {
    data,
    match: { params },
    history
  } = props;

  const types = R.uniq(R.map(R.prop("type"), data));
  const typeOptions = R.map(v => ({ label: v }), types);

  const [type, setType] = useState({ label: params.type });
  const [action, setAction] = useState({
    label: params.action && unslug(params.action)
  });

  const actionsByType = R.filter(R.propEq("type", type.label), data);
  const actionOptions = R.map(v => ({ label: v.action, ...v }), actionsByType);

  const typeSelected = type && R.length(actionsByType) !== 0;
  const actionSelected = action && R.length(actionsByType) !== 0;

  const optionAction = R.find(a => a.label === action.label, actionOptions);

  return (
    <Fragment>
      <Header>
        <Title>
          <Description>
            Find the right method you need in Ramda <RamdaIcon />
          </Description>
          <GithubLink href='https://github.com/davesnx/learn-ramda'>
            <GithubIcon />
            davesnx/learn-ramda
          </GithubLink>
          <Version
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/ramda/ramda/releases/tag/0.26.0'
          >
            ramda@0.26.0
          </Version>
        </Title>
        <Sentence>
          I have a
          <SelectWrapper>
            <Select
              openMenuOnFocus
              styles={customStyles}
              components={{ Option }}
              isOptionSelected={option => option === type}
              autoFocus={!typeSelected}
              placeholder='Select type'
              onChange={option => {
                setAction({});
                setType(option);
                history.push("/" + option.label);
              }}
              options={typeOptions}
              value={type}
              theme={customTheme}
            />
          </SelectWrapper>
          {typeSelected && (
            <Fragment>
              I would like to
              <SelectWrapperBig>
                <Select
                  styles={customStyles}
                  autoFocus={typeSelected && !actionSelected}
                  isOptionSelected={option => option === action}
                  placeholder='Select an action'
                  options={actionOptions}
                  onChange={option => {
                    history.push('/' + params.type + "/" + slug(option.label));
                    setAction(option);
                  }}
                  value={action}
                  theme={customTheme}
                />
              </SelectWrapperBig>
            </Fragment>
          )}
        </Sentence>
      </Header>
      {optionAction && (
        <Suspense fallback={<div>Loading...</div>}>
          <Content>
            <Solutions data={optionAction} />
          </Content>
        </Suspense>
      )}
    </Fragment>
  );
};

export default App;
