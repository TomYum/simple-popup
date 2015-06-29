tyPopup=function(t){return this.settings={},this.init(t)},tyPopup.prototype.defaults={overlay:!0,animation:"css",overlayTrigger:!0},tyPopup.prototype._storage={overlay:!1,popup:!1,closeBtn:!1},tyPopup.prototype._extends=function(){var t,e,o,p,s=arguments[0]||{},n=1,a=arguments.length;for("object"!=typeof s&&(s={}),n===a&&(s=this,n--);a>n;n++)if(null!=(t=arguments[n]))for(e in t)o=s[e],p=t[e],s!==p&&void 0!==p&&(s[e]=p);return s},tyPopup.prototype.init=function(t){return t&&t instanceof Object&&(this.settings=this._extends({},this.defaults,t)),console.log(this.settings),this._storage.overlay||this._createOverlay(),this._storage.popup||this._createPopup(),this},tyPopup.prototype.show=function(){this._storage.overlay.className="show",this._storage.popup.className="show"},tyPopup.prototype.hide=function(){this._storage.overlay.className="",this._storage.popup.className=""},tyPopup.prototype.setContent=function(){},tyPopup.prototype._createOverlay=function(){var t=document.createElement("div");return t.id="ty-overlay",document.body.appendChild(t),this._storage.overlay=t,t},tyPopup.prototype._createPopup=function(){var t=document.createElement("div"),e=document.createElement("span"),o=document.createElement("div"),p=document.createElement("div"),s=document.createElement("div");return t.id="ty-popup",t.className="ty-popup",e.className="ty-popup-close-btn",o.className="ty-popup-header",s.className="ty-popup-footer",p.className="ty-popup-content",t.appendChild(e),t.appendChild(o),t.appendChild(p),t.appendChild(s),document.body.appendChild(t),this._storage.popup=t,this._storage.closeBtn=e,this._storage.contentBlock=p,t},tyPopup.prototype._animate=function(){};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwuanMiXSwibmFtZXMiOlsidHlQb3B1cCIsIm9wdGlvbnMiLCJ0aGlzIiwic2V0dGluZ3MiLCJpbml0IiwicHJvdG90eXBlIiwiZGVmYXVsdHMiLCJvdmVybGF5IiwiYW5pbWF0aW9uIiwib3ZlcmxheVRyaWdnZXIiLCJfc3RvcmFnZSIsInBvcHVwIiwiY2xvc2VCdG4iLCJfZXh0ZW5kcyIsIm5hbWUiLCJzcmMiLCJjb3B5IiwidGFyZ2V0IiwiYXJndW1lbnRzIiwiaSIsImxlbmd0aCIsInVuZGVmaW5lZCIsIk9iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJfY3JlYXRlT3ZlcmxheSIsIl9jcmVhdGVQb3B1cCIsInNob3ciLCJjbGFzc05hbWUiLCJoaWRlIiwic2V0Q29udGVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiYnRuQ2xvc2UiLCJwb3B1cEhlYWRlciIsInBvcHVwQ29udGVudCIsInBvcHVwRm9vdGVyIiwiY29udGVudEJsb2NrIiwiX2FuaW1hdGUiXSwibWFwcGluZ3MiOiJBQVFBQSxRQUFVLFNBQVVDLEdBRWhCLE1BREFDLE1BQUtDLFlBQ0VELEtBQUtFLEtBQUtILElBSXJCRCxRQUFRSyxVQUFVQyxVQUVkQyxTQUFTLEVBQ1RDLFVBQVcsTUFDWEMsZ0JBQWdCLEdBR3BCVCxRQUFRSyxVQUFVSyxVQUFZSCxTQUFTLEVBQU9JLE9BQU8sRUFBT0MsVUFBVSxHQU90RVosUUFBUUssVUFBVVEsU0FBVyxXQUN6QixHQUFJWixHQUFTYSxFQUFNQyxFQUFLQyxFQUNwQkMsRUFBU0MsVUFBVSxPQUNuQkMsRUFBSSxFQUNKQyxFQUFTRixVQUFVRSxNQWF2QixLQVZzQixnQkFBWEgsS0FDUEEsTUFJQUUsSUFBTUMsSUFDTkgsRUFBU2YsS0FDVGlCLEtBR09DLEVBQUpELEVBQVlBLElBRWYsR0FBZ0MsT0FBM0JsQixFQUFVaUIsVUFBVUMsSUFFckIsSUFBS0wsSUFBUWIsR0FDVGMsRUFBTUUsRUFBT0gsR0FDYkUsRUFBT2YsRUFBUWEsR0FHWEcsSUFBV0QsR0FJRkssU0FBVEwsSUFDQUMsRUFBT0gsR0FBUUUsRUFNL0IsT0FBT0MsSUFJWGpCLFFBQVFLLFVBQVVELEtBQU8sU0FBVUgsR0FRL0IsTUFQSUEsSUFBV0EsWUFBb0JxQixVQUMvQnBCLEtBQUtDLFNBQVdELEtBQUtXLFlBQWFYLEtBQUtJLFNBQVVMLElBRXJEc0IsUUFBUUMsSUFBSXRCLEtBQUtDLFVBRVpELEtBQUtRLFNBQVNILFNBQVNMLEtBQUt1QixpQkFDNUJ2QixLQUFLUSxTQUFTQyxPQUFPVCxLQUFLd0IsZUFDeEJ4QixNQUVYRixRQUFRSyxVQUFVc0IsS0FBTyxXQUNyQnpCLEtBQUtRLFNBQVNILFFBQVFxQixVQUFZLE9BQ2xDMUIsS0FBS1EsU0FBU0MsTUFBTWlCLFVBQVksUUFFcEM1QixRQUFRSyxVQUFVd0IsS0FBTyxXQUNyQjNCLEtBQUtRLFNBQVNILFFBQVFxQixVQUFZLEdBQ2xDMUIsS0FBS1EsU0FBU0MsTUFBTWlCLFVBQVksSUFFcEM1QixRQUFRSyxVQUFVeUIsV0FBYSxhQUUvQjlCLFFBQVFLLFVBQVVvQixlQUFpQixXQUUvQixHQUFJbEIsR0FBVXdCLFNBQVNDLGNBQWMsTUFJckMsT0FIQXpCLEdBQVEwQixHQUFLLGFBQ2JGLFNBQVNHLEtBQUtDLFlBQVk1QixHQUMxQkwsS0FBS1EsU0FBU0gsUUFBVUEsRUFDakJBLEdBRVhQLFFBQVFLLFVBQVVxQixhQUFlLFdBRTdCLEdBQUlmLEdBQVFvQixTQUFTQyxjQUFjLE9BQy9CSSxFQUFXTCxTQUFTQyxjQUFjLFFBQ2xDSyxFQUFjTixTQUFTQyxjQUFjLE9BQ3JDTSxFQUFlUCxTQUFTQyxjQUFjLE9BQ3RDTyxFQUFjUixTQUFTQyxjQUFjLE1Bb0J6QyxPQWxCQXJCLEdBQU1zQixHQUFLLFdBQ1h0QixFQUFNaUIsVUFBWSxXQUNsQlEsRUFBU1IsVUFBWSxxQkFDckJTLEVBQVlULFVBQVksa0JBQ3hCVyxFQUFZWCxVQUFZLGtCQUN4QlUsRUFBYVYsVUFBWSxtQkFFekJqQixFQUFNd0IsWUFBWUMsR0FDbEJ6QixFQUFNd0IsWUFBWUUsR0FDbEIxQixFQUFNd0IsWUFBWUcsR0FDbEIzQixFQUFNd0IsWUFBWUksR0FFbEJSLFNBQVNHLEtBQUtDLFlBQVl4QixHQUUxQlQsS0FBS1EsU0FBU0MsTUFBUUEsRUFDdEJULEtBQUtRLFNBQVNFLFNBQVd3QixFQUN6QmxDLEtBQUtRLFNBQVM4QixhQUFlRixFQUV0QjNCLEdBR1hYLFFBQVFLLFVBQVVvQyxTQUFXIiwiZmlsZSI6ImdlbmVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdG9teXVtIG9uIDI5LjA2LjE1LlxuICovXG5cblxuLy87KGZ1bmN0aW9uKHdpbmRvdyxkb2N1bWVudCl7XG5cblxudHlQb3B1cCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHt9O1xuICAgIHJldHVybiB0aGlzLmluaXQob3B0aW9ucyk7XG4gICAgLy9yZXR1cm4gIHR5UG9wdXAucHJvdG90eXBlLmluaXQoIG9wdGlvbnMgKTtcbn07XG5cbnR5UG9wdXAucHJvdG90eXBlLmRlZmF1bHRzID0ge1xuXG4gICAgb3ZlcmxheTogdHJ1ZSxcbiAgICBhbmltYXRpb246ICdjc3MnLCAvLyBjc3Mgb3IganNcbiAgICBvdmVybGF5VHJpZ2dlcjogdHJ1ZVxufTtcblxudHlQb3B1cC5wcm90b3R5cGUuX3N0b3JhZ2UgPSB7b3ZlcmxheTogZmFsc2UsIHBvcHVwOiBmYWxzZSwgY2xvc2VCdG46IGZhbHNlfTtcblxuLyoqXG4gKiBDb3BpZWQgZnJvbSBqUXVlcnkuIFRoYW5rcy5cbiAqIEByZXR1cm5zIHsqfHt9fVxuICogQHByaXZhdGVcbiAqL1xudHlQb3B1cC5wcm90b3R5cGUuX2V4dGVuZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lLFxuICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbMF0gfHwge30sXG4gICAgICAgIGkgPSAxLFxuICAgICAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlbiB0YXJnZXQgaXMgYSBzdHJpbmcgb3Igc29tZXRoaW5nIChwb3NzaWJsZSBpbiBkZWVwIGNvcHkpXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdGFyZ2V0ID0ge307XG4gICAgfVxuXG4gICAgLy8gRXh0ZW5kIGpRdWVyeSBpdHNlbGYgaWYgb25seSBvbmUgYXJndW1lbnQgaXMgcGFzc2VkXG4gICAgaWYgKGkgPT09IGxlbmd0aCkge1xuICAgICAgICB0YXJnZXQgPSB0aGlzO1xuICAgICAgICBpLS07XG4gICAgfVxuXG4gICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG4gICAgICAgIGlmICgob3B0aW9ucyA9IGFyZ3VtZW50c1tpXSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuICAgICAgICAgICAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBzcmMgPSB0YXJnZXRbbmFtZV07XG4gICAgICAgICAgICAgICAgY29weSA9IG9wdGlvbnNbbmFtZV07XG5cbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gY29weSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29weSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IGNvcHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG4gICAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxudHlQb3B1cC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucyBpbnN0YW5jZW9mICBPYmplY3QpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuX2V4dGVuZHMoe30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnNldHRpbmdzKTtcblxuICAgIGlmICghdGhpcy5fc3RvcmFnZS5vdmVybGF5KSB0aGlzLl9jcmVhdGVPdmVybGF5KCk7XG4gICAgaWYgKCF0aGlzLl9zdG9yYWdlLnBvcHVwKSB0aGlzLl9jcmVhdGVQb3B1cCgpO1xuICAgIHJldHVybiB0aGlzO1xufTtcbnR5UG9wdXAucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fc3RvcmFnZS5vdmVybGF5LmNsYXNzTmFtZSA9ICdzaG93JztcbiAgICB0aGlzLl9zdG9yYWdlLnBvcHVwLmNsYXNzTmFtZSA9ICdzaG93Jztcbn07XG50eVBvcHVwLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3N0b3JhZ2Uub3ZlcmxheS5jbGFzc05hbWUgPSAnJztcbiAgICB0aGlzLl9zdG9yYWdlLnBvcHVwLmNsYXNzTmFtZSA9ICcnO1xufTtcbnR5UG9wdXAucHJvdG90eXBlLnNldENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG59O1xudHlQb3B1cC5wcm90b3R5cGUuX2NyZWF0ZU92ZXJsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9yZXR1cm4gZmFsc2U7XG4gICAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LmlkID0gJ3R5LW92ZXJsYXknO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgdGhpcy5fc3RvcmFnZS5vdmVybGF5ID0gb3ZlcmxheTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbn07XG50eVBvcHVwLnByb3RvdHlwZS5fY3JlYXRlUG9wdXAgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgYnRuQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgICAgIHBvcHVwSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIHBvcHVwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBwb3B1cEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcG9wdXAuaWQgPSAndHktcG9wdXAnO1xuICAgIHBvcHVwLmNsYXNzTmFtZSA9ICd0eS1wb3B1cCc7XG4gICAgYnRuQ2xvc2UuY2xhc3NOYW1lID0gJ3R5LXBvcHVwLWNsb3NlLWJ0bic7XG4gICAgcG9wdXBIZWFkZXIuY2xhc3NOYW1lID0gJ3R5LXBvcHVwLWhlYWRlcic7XG4gICAgcG9wdXBGb290ZXIuY2xhc3NOYW1lID0gJ3R5LXBvcHVwLWZvb3Rlcic7XG4gICAgcG9wdXBDb250ZW50LmNsYXNzTmFtZSA9ICd0eS1wb3B1cC1jb250ZW50JztcblxuICAgIHBvcHVwLmFwcGVuZENoaWxkKGJ0bkNsb3NlKTtcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEhlYWRlcik7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBDb250ZW50KTtcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEZvb3Rlcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICAgIHRoaXMuX3N0b3JhZ2UucG9wdXAgPSBwb3B1cDtcbiAgICB0aGlzLl9zdG9yYWdlLmNsb3NlQnRuID0gYnRuQ2xvc2U7XG4gICAgdGhpcy5fc3RvcmFnZS5jb250ZW50QmxvY2sgPSBwb3B1cENvbnRlbnQ7XG5cbiAgICByZXR1cm4gcG9wdXA7XG59O1xuXG50eVBvcHVwLnByb3RvdHlwZS5fYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcbn07XG5cblxuXG4vL30pKHdpbmRvdyxkb2N1bWVudCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9