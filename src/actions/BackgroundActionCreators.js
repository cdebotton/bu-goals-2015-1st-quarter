import flux from '../flux';

class BackgroundActionCreators {
  constructor() {
    this.generateActions(
      'setBackground'
    );
  }
}

export default flux.createActions(BackgroundActionCreators);
