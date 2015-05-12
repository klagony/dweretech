/*!CK:1123115485!*//*1385346584,173217053*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Hxf8J"]); }

__d("PopoverMenu.react",["CSS","InlineBlock.react","Popover","PopoverMenu","React","ReactPropTypes","SubscriptionsHandler","cx","joinClasses","areEqual"],function(a,b,c,d,e,f){var g=b('CSS'),h=b('InlineBlock.react'),i=b('Popover'),j=b('PopoverMenu'),k=b('React'),l=b('ReactPropTypes'),m=b('SubscriptionsHandler'),n=b('cx'),o=b('joinClasses'),p=b('areEqual'),q=k.createClass({displayName:'ReactPopoverMenu',propTypes:{alignh:l.oneOf(['left','center','right']),layerBehaviors:l.array,menu:l.object,disabled:l.bool},_menuSubscriptions:null,componentDidMount:function(){var r=this.refs.root.getDOMNode(),s=r.firstChild;g.addClass(s,"_p");this._popover=new i(r,s,this.props.layerBehaviors,{alignh:this.props.alignh,disabled:this.props.disabled});this._popoverMenu=new j(this._popover,s,this._createMenu(this.props.menu),this.props.behaviors);},componentDidUpdate:function(r){if(!p(r.menu,this.props.menu)){if(this._menuSubscriptions){this._menuSubscriptions.release();this._menuSubscriptions=null;}this._popoverMenu.setMenu(this._createMenu(this.props.menu));}if(this.props.alignh!==r.alignh)this._popoverMenu.getPopover().getLayer().setAlignment(this.props.alignh);if(this.props.disabled!==r.disabled)if(this.props.disabled){this._popoverMenu.disable();}else this._popoverMenu.enable();},getFirstChild:function(){var r=this.props.children;return Array.isArray(r)?r[0]:r;},getButtonSize:function(){var r=this.getFirstChild();return r&&r.getButtonSize();},render:function(){var r=this.getFirstChild();r.props.className=o(r.props.className||'',"_p");return this.transferPropsTo(h({alignv:"middle",className:"uiPopover",ref:"root",disabled:null},this.props.children));},componentWillUnmount:function(){if(this._menuSubscriptions){this._menuSubscriptions.release();this._menuSubscriptions=null;}},_createMenu:function(r){var s=new r.ctor(r.menuitems,r.config);this._menuSubscriptions=new m();if(r.onItemClick)this._menuSubscriptions.addSubscriptions(s.subscribe('itemclick',r.onItemClick));if(r.onChange)this._menuSubscriptions.addSubscriptions(s.subscribe('change',r.onChange));if(this.props.onShow)this._menuSubscriptions.addSubscriptions(this._popover.subscribe('show',this.props.onShow));if(this.props.onHide)this._menuSubscriptions.addSubscriptions(this._popover.subscribe('hide',this.props.onHide));return s;},showPopover:function(r){this._popover.showLayer();if(r){var s=this._popoverMenu.getMenu();s.blur();s.focusAnItem(r);}},hidePopover:function(){this._popover.hideLayer();}});e.exports=q;});
__d("ReactMenu",["Menu","MenuItem","MenuSelectableItem","MenuTheme","SelectableMenu","cx","flattenArray","joinClasses","merge"],function(a,b,c,d,e,f){var g=b('Menu'),h=b('MenuItem'),i=b('MenuSelectableItem'),j=b('MenuTheme'),k=b('SelectableMenu'),l=b('cx'),m=b('flattenArray'),n=b('joinClasses'),o=b('merge'),p=Array.prototype.slice;function q(r,s){if(!Array.isArray(s))s=p.call(arguments,1);var t={ctor:g,menuitems:m(s||[]),config:{theme:j,maxheight:r?r.maxheight:null,className:r?r.className:null}};return o(t,r);}q.SelectableMenu=function(r,s){if(!Array.isArray(s))s=p.call(arguments,1);var t={ctor:k,menuitems:m(s),config:{className:n("_57di",r?r.className:null),theme:j,multiple:r&&r.multiple,maxheight:r?r.maxheight:null}};return o(t,r);};q.Item=function(r,s){if(!Array.isArray(s))s=p.call(arguments,1);var t={ctor:h,reactChildren:s};return o(t,r);};q.SelectableItem=function(r,s){if(!Array.isArray(s))s=p.call(arguments,1);var t={ctor:i,reactChildren:s};return o(t,r);};e.exports=q;});
__d("UFIOrderingModeSelector.react",["InlineBlock.react","Link.react","LoadingIndicator.react","React","Image.react","ReactMenu","PopoverMenu.react","cx","ix"],function(a,b,c,d,e,f){var g=b('InlineBlock.react'),h=b('Link.react'),i=b('LoadingIndicator.react'),j=b('React'),k=b('Image.react'),l=b('ReactMenu'),m=b('PopoverMenu.react'),n=b('cx'),o=b('ix'),p=l.SelectableMenu,q=l.SelectableItem,r=j.createClass({displayName:'UFIOrderingModeSelector',getInitialState:function(){var s=null;this.props.orderingmodes.map(function(t){if(t.selected)s=t;});return {selectedMode:s};},onMenuItemClick:function(s,t){var u=t.item.getValue();this.props.orderingmodes.map(function(v){if(v.value===u)this.setState({selectedMode:v});}.bind(this));this.props.onOrderChanged(u);},render:function(){var s=null;if(this.props.currentOrderingMode!=this.state.selectedMode.value)s=i({className:"UFIOrderingModeSelectorLoading",color:"white",size:"small"});var t=p({onItemClick:this.onMenuItemClick},this.props.orderingmodes.map(function(u){return (q({key:u.value,value:u.value,selected:u.value===this.state.selectedMode.value},u.name));}.bind(this)));return (j.DOM.div({className:"UFIOrderingModeSelector"},s,g(null,m({className:"UFIOrderingModeSelectorPopover",menu:t,alignh:"right"},h(null,this.state.selectedMode.name,k({className:"UFIOrderingModeSelectorDownCaret",src:o('/images/ui/xhp/link/more/down_caret.gif')}))))));}});e.exports=r;});