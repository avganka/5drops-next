import {TooltipProps} from './Tooltip.types';
import styles from './Tooltip.module.css';

function Tooltip({className, width, text, children, ...props}: TooltipProps): JSX.Element {
  return (
    <div className={styles.tooltip} {...props}>
      <span className={styles.tooltipText} style={{width: width}}>
        {text}
      </span>
      {children}
    </div>
  );
}

export default Tooltip;
