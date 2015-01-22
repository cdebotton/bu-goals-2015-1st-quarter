import flux from '../flux';
import BackgroundActionCreators from '../actions/BackgroundActionCreators';

class BackgroundStore {
  constructor() {
    this.bindActions(BackgroundActionCreators);
    this.color = '#4CCEFF';
  }

  onSetBackground(color) {
    this.color = color;
  }
}

export default flux.createStore(BackgroundStore);
