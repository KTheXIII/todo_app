(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(3),c=n(5),i=n(4),s=n(6),d=n(0),l=n.n(d),r=n(8),u=n.n(r),h=(n(15),function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"appname noselect"},"./todo_list")}}]),t}(d.Component)),m=n(1),p=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"todo-item animated "},l.a.createElement("input",{type:"checkbox",className:"form-checkbox ",name:"checkbox",id:this.props.data.id,checked:this.props.data.completed,onChange:function(){e.props.handleChange(e.props.data,"complete")}}),l.a.createElement("p",{className:this.props.data.completed?"completedTask":""},this.props.data.text),l.a.createElement("div",{name:"delete",className:"remove-item noselect",onClick:function(){e.props.handleChange(e.props.data,"delete")}},"\u2715"))}}]),t}(d.Component),b=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(c.a)(this,Object(i.a)(t).call(this))).state={isLoading:!0,todos:[],todoText:""},e.handleChange=e.handleChange.bind(Object(m.a)(Object(m.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(m.a)(Object(m.a)(e))),e.handleInputChange=e.handleInputChange.bind(Object(m.a)(Object(m.a)(e))),e}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({isLoading:!1})},500)}},{key:"handleChange",value:function(e,t){this.setState(function(n){return{todos:n.todos.map(function(n){return n.id===e.id&&("complete"===t?n.completed=!n.completed:"delete"===t&&(n.deleted=!0)),n})}})}},{key:"handleInputChange",value:function(e){var t=e.target.value;this.setState({todoText:t})}},{key:"handleSubmit",value:function(e){var t=this.state.todoText,n=0===this.state.todos.length?0:this.state.todos[this.state.todos.length-1].id;n++,this.setState(function(e){var a=e.todos;return""!==t&&a.push({id:n,text:t,completed:!1,deleted:!1}),{todos:a,todoText:""}}),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state.todos.filter(function(e){return!e.deleted}).map(function(t){return l.a.createElement(p,{key:t.id,data:t,handleChange:e.handleChange})});return l.a.createElement("div",{className:"todo-list"},l.a.createElement("form",{className:"new-item",onSubmit:this.handleSubmit},l.a.createElement("input",{value:this.state.todoText,name:"newtodo",type:"text",className:"todo-input ",placeholder:"What needs to be done",onChange:this.handleInputChange}),l.a.createElement("button",null)),this.state.isLoading?l.a.createElement("h1",null,"Loading..."):t)}}]),t}(d.Component),f=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container "},l.a.createElement(h,null),l.a.createElement(b,null))}}]),t}(d.Component);u.a.render(l.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ed321fd7.chunk.js.map