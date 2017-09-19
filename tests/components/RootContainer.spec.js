import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import RootContainer from '../../app/containers/RootContainer';
import PlayerContainer from '../../app/containers/PlayerContainer';
import NavContainer from '../../app/containers/NavContainer';
import { ConnectedRouter } from 'connected-react-router';

describe('RootContainer suite', () => {
  it('should contain NavContainer', () => {
    const wrapper = shallow(<RootContainer />);
    expect(wrapper.find(NavContainer)).to.have.length(1);
  });

  it('should contain PlayContainer', () => {
    const wrapper = shallow(<RootContainer />);
    expect(wrapper.find(PlayerContainer)).to.have.length(1);
  });

  it('should contain ConnectedRouter', () => {
    const wrapper = shallow(<RootContainer />);
    expect(wrapper.find(ConnectedRouter)).to.have.length(1);
  });
});
