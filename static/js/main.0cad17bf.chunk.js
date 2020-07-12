(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),o=(a(14),a(8)),l=a(1),c=a(2),u=a(5),h=a(4),m=a(3);a(15);function v(e){return r.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}a(16);var p=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"create_rq",value:function(e,t){for(var a=[],n=e;n<t;n++)a.push(this.renderSquare(n));return a}},{key:"create_row",value:function(e){for(var t=[],a=0;a<e;a++){var n=a*e,s=parseInt(n)+parseInt(e);t.push(r.a.createElement("div",{className:"board-row"},this.create_rq(n,s)))}return t}},{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(v,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return r.a.createElement("div",null,this.create_row(this.props.rows))}}]),a}(r.a.Component),f=(a(17),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={stepNumber:0,xIsNext:!0},n}return Object(c.a)(a,[{key:"hor",value:function(e,t,a,n,r,s){for(var i=0,o=0;o<a;o++){for(var l=0;l<a;l++){if("X"===e[i]?(r++,s=0,n++):"O"===e[i]?(s++,r=0,n++):n=0,i++,s>=t&&n>=t)return"O";if(r>=t&&n>=t)return"X"}r=0,s=0}}},{key:"vert",value:function(e,t,a,n,r,s){for(var i=0;i<a;i++){for(var o=i;o<Math.pow(a,2);o+=a){if("X"===e[o]?(r++,s=0,n++):"O"===e[o]?(s++,r=0,n++):n=0,s>=t&&n>=t)return"O";if(r>=t&&n>=t)return"X"}r=0,s=0}}},{key:"rl_cross",value:function(e,t,a,n,r,s){for(var i=0,o=0;o<Math.pow(a,2);o++){for(var l=o;l<Math.pow(a,2);l+=a+1){"X"===e[l]?(r++,s=0,n++):"O"===e[l]?(s++,r=0,n++):n=0;for(var c=a-1;c<Math.pow(a,2);c+=a)l===c&&(i=1);for(var u=a*(a-1);u<Math.pow(a,2);u++)l===u&&(i=1);if(1===i)break;if(s>=t&&n>=t)return"O";if(r>=t&&n>=t)return"X"}s=0,r=0}}},{key:"lr_cross",value:function(e,t,a,n,r,s){for(var i=0,o=a-1;o<Math.pow(a,2);o++){for(var l=o;l<Math.pow(a,2);l+=a-1){"X"===e[l]?(r++,s=0,n++):"O"===e[l]?(s++,r=0,n++):n=0;for(var c=a;c<Math.pow(a,2);c+=a)l===c&&(i=1);for(var u=a*(a-1);u<Math.pow(a,2);u++)l===u&&(i=1);if(1===i)break;if(s>=t&&n>=t)return"O";if(r>=t&&n>=t)return"X"}s=0,r=0}}},{key:"calculateWinner",value:function(e,t){var a=this.props.board_rows;return this.hor(e,t,a,0,0,0)?this.hor(e,t,a,0,0,0):this.vert(e,t,a,0,0,0)?this.vert(e,t,a,0,0,0):this.rl_cross(e,t,a,0,0,0)?this.rl_cross(e,t,a,0,0,0):this.lr_cross(e,t,a,0,0,0)?this.lr_cross(e,t,a,0,0,0):null}},{key:"handleClick",value:function(e){var t=this.props.history,a=this.props.board,n=this.props.rows;this.calculateWinner(a,n)||a[e]||(a[e]=this.state.xIsNext?"X":"O",t.push(e),this.calculateWinner(a,n)?this.setState({stepNumber:0,xIsNext:!0}):this.setState({stepNumber:this.props.history.length,xIsNext:!this.state.xIsNext}))}},{key:"check",value:function(e,t,a,n,s){return e&&!s?r.a.createElement("div",{className:"game-info"},r.a.createElement("br",null),r.a.createElement("div",null,t),r.a.createElement("div",null,a," in a row"),r.a.createElement("ol",null,n)):!e&&s?r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,t),r.a.createElement("div",null,a," in a row"),r.a.createElement("ol",null,n)):void 0}},{key:"jumpTo",value:function(e,t,a){for(var n=e.length-1;n>=a;n--)t[e.pop()]=null;this.setState({stepNumber:a,xIsNext:a%2===0})}},{key:"render",value:function(){var e,t=this,a=this.props.board,n=this.props.history,s=this.props.rows,i=this.calculateWinner(a,s),o=this.props.isSmall,l=n.map((function(e,s){var i=s?"Go to move #"+s:"Refresh";return r.a.createElement("li",{key:s},r.a.createElement("button",{onClick:function(){return t.jumpTo(n,a,s)}},i))}));return e=i?"Winner: "+i:"Next player: "+(this.state.xIsNext?"X":"O"),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(p,{rows:this.props.board_rows,squares:a,onClick:function(e){return t.handleClick(e)}}),this.check(o,e,s,l,0)),this.check(o,e,s,l,1))}}]),a}(r.a.Component)),d=(a(18),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleWindowResize=function(){n.setState({isSmall:window.innerWidth<768})},n.state={rows:3,winning:3,board:[],history:[],xIsNext:!0,isSmall:!1},n.handleInputChange=n.handleInputChange.bind(Object(u.a)(n)),n.handleClick=n.handleClick.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target.value,a=e.target.name;this.setState(Object(o.a)({},a,t))}},{key:"componentDidMount",value:function(){this.handleWindowResize(),window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleClick",value:function(e){e.preventDefault(),window.confirm("It will refresh the game! Continue?")&&(this.refs.rows.value<3||this.refs.rows.value>10?alert("3-10 only"):this.setState({rows:this.refs.rows.value,board:[],history:[],xIsNext:!0}))}},{key:"how_many",value:function(e){for(var t=[],a=3;a<=e;a++)t.push(r.a.createElement("option",{value:a},a));return t}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"submission"},r.a.createElement("div",{className:"game_name"},"Tic Tac Toe"),r.a.createElement("form",null,r.a.createElement("label",{className:"size"},"Board Size",r.a.createElement("br",null),r.a.createElement("input",{ref:"rows",type:"number"}),r.a.createElement("button",{className:"submit",onClick:function(t){e.handleClick(t)}},"Change"))),r.a.createElement("label",{className:"win"},r.a.createElement("select",{className:"win_select",name:"winning",value:this.state.winning,onChange:this.handleInputChange},this.how_many(this.state.rows)),"In a Row",r.a.createElement("br",null)),r.a.createElement(f,{rows:parseInt(this.state.winning),board_rows:parseInt(this.state.rows),board:this.state.board,history:this.state.history,xIsNext:this.state.xIsNext,isSmall:this.state.isSmall}))}}]),a}(r.a.Component));i.a.render(r.a.createElement(d,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.0cad17bf.chunk.js.map