/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

import {Notifier} from "./Notifier";
import {Adapter} from "./Adapter";
import {Notification} from "./Notification";
export class BasicNotifierImpl implements Notifier
    {

        private  _eAdapters:Array<Adapter> = null;

        public eAdapters= ():Array<Adapter> =>
        {

            if (this._eAdapters == null)
            {
                this._eAdapters = new Array<Adapter>();
            }
            return this._eAdapters;
        }

            //protected BasicEList<Adapter> eBasicAdapters()
        protected eBasicAdapters=():Array<Adapter> =>
        {
            return null;
        }

        public eNotify=( notification:Notification):void=>
        {
            for (var adapter of this.eAdapters())
            {
                adapter.notifyChanged(notification);
            }
        }

        public  eNotificationRequired =():boolean =>
        {
            return this.eAdapters().length > 0;
        }
    }
