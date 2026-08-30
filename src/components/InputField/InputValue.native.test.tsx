import React from 'react';
import { TextInput } from 'react-native';
import renderer, { act } from 'react-test-renderer';

import { InputValue } from './InputValue.native';

jest.mock('../../theme', () => ({
  useTheme: () => ({
    theme: { colors: { colorTextPrimary: '#000', colorTextSecondary: '#666' } },
  }),
  rawTokens: {
    fontPrimary: 'Inter',
    weightMedium: '500',
    fontSize14: 14,
    spacing20: 20,
  },
}));

jest.mock('./InputField.styles', () => ({
  styles: { input: {}, containerDisabled: {} },
}));

describe('InputValue.native', () => {
  it('puts autoCorrect on TextInput because react-strict-dom omits it', () => {
    const inputRef = { current: null };
    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(
        <InputValue
          inputRef={inputRef}
          value="secret"
          type="password"
          autoCorrect={false}
          autoComplete="off"
          autoCapitalize="none"
          spellCheck={false}
          onInput={() => {}}
          onFocus={() => {}}
          onBlur={() => {}}
        />
      );
    });

    const inputEl = component!.root.findByType('input');
    expect(typeof inputEl.props.children).toBe('function');

    const renderAs = inputEl.props.children as (
      p: Record<string, unknown>
    ) => React.ReactNode;

    let host: renderer.ReactTestRenderer;
    act(() => {
      host = renderer.create(
        <>{renderAs({ value: 'secret', secureTextEntry: true })}</>
      );
    });

    const native = host!.root.findByType(TextInput);
    expect(native.props.autoCorrect).toBe(false);
    expect(native.props.secureTextEntry).toBe(true);
  });
});
