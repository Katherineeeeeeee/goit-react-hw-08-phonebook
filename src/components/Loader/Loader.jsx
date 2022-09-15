import s from './Loader.module.css';

import { Rings } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={s.loader}>
      <Rings
        height="80"
        width="80"
        color="#4fa94d"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
}
