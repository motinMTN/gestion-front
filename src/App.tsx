import { AppRouter } from './router/AppRouter';
import Spinner from './components/spinner/Spinner';
import useUILoading from './hooks/useUILoading';
// import { FuncDistributor } from './helpers/funcDistributor';
import './index.scss';
// import useDistributorIn from './hooks/useDistributorIn';

function App() {
  const isLoading = useUILoading();
  // FuncDistributor(window.location.href);
  // const distributorIn = useDistributorIn();
  // const root = document.documentElement;

  // if (distributorIn && distributorIn.properties) {
  //   console.log(distributorIn);
  //   root.style.setProperty('--primary', distributorIn.properties.theme_Background);
  //   root.style.setProperty('--topbar-bg', distributorIn.properties.topbar_Background);
  //   root.style.setProperty('--topbar-bg-text', distributorIn.properties.topbar_ColorText);
  //   root.style.setProperty('--sidebar-bg', distributorIn.properties.sidebar_Background);
  //   root.style.setProperty('--sidebar-bg-text', distributorIn.properties.sidebar_ColorText);
  //   root.style.setProperty('--auth-form_bg', distributorIn.properties.authForm_Background);
  //   root.style.setProperty('--auth-form-bg-text', distributorIn.properties.authForm_ColorText);
  //   root.style.setProperty('--general-font-family', distributorIn.properties.general_fontFamily);
  // }

  return (
    <>
      <AppRouter />      
      {isLoading ? <Spinner /> : null}
    </>
  );
}

export default App;

