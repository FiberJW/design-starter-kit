import { Platform } from 'react-native';

// hack to get webpack to not bundle native lib
const rrn = 'react-router-native';

export {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
  generatePath,
} from 'react-router';

export const Router =
  Platform.OS === 'web' ? require('react-router-dom').BrowserRouter : require(rrn).NativeRouter;
