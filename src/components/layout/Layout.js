
import { HEADER_HEIGHT } from '../../utils/constants';
import classes from './Layout.module.css';

export default function Layout({children}) {
  return (
    <div style={{ marginTop: HEADER_HEIGHT }}>
      <main className={classes.main}>{children}</main>
    </div>
  );
}
