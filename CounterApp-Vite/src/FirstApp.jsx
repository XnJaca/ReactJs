import PropTypes from 'prop-types';

export const FirstApp = ({ name }) => {
  return (
    <>
      <h1>Hello Human!</h1>
      <h2>I'm {name}</h2>
      <p>The lord of the code.</p>
    </>
  );
};


FirstApp.propTypes = {
    name: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'No Name'
}