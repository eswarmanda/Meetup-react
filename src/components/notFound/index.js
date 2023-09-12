import {
  MainContainer,
  NotFoundImage,
  ErrorHeading,
  ErrorDescription,
} from './styledComponent'

const NotFound = () => (
  <MainContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <ErrorHeading>Page Not Found</ErrorHeading>
    <ErrorDescription>
      We are sorry, the page you requested could not be found
    </ErrorDescription>
  </MainContainer>
)

export default NotFound
