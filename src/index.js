import React from 'react';
import ReactRouter from 'react-router';
import Routes from './components/Routes';

ReactRouter.run(Routes, ReactRouter.HashLocation, (Handler, state) => {
  var {params, query} = state;

  React.render(
    <Handler
      params={params}
      query={query} />,
    document.body
  );
});
