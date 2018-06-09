<template>
  <div class="mpvue-demo">
    <p class="title">{{title}}</p>
    <p>{{mytodo}}</p>
    <input type="text" v-model="mytodo"/>
    <!-- v-model会自动实现双向绑定（直接绑定到data中对应变量，并赋值给它），一般用于表单内，不要滥用 -->
    <button @click="addTodo">加一条</button>
    <button @click="clearTodo">清空</button>
    <ul class="todos">
      <!-- :会变动的属性(动态绑定属性) 标签或组件的属性是跟data相关，表示; -->
      <!-- v-for v-key vue 循环指令 in 指定 key+index -->
      
      <li  v-key="i" v-for="(todo, i) in todos" @click="toggle(i)" :class="{'done':todo.status}">{{todo.thing}}</li>
      <li>{{todoNum}}/{{todos.length}}</li>
    </ul>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      title: 'Hello Mpvue',
      todos: [
        {
          status: true,
          thing: '吃饭'
        },{
          status: false,
          thing: '睡觉'
        },{
          status: false,
          thing: '打豆豆'
        }
      ],
      mytodo:''
    }
  },

  components: {
  },
  computed: {
    todoNum () {
      return this.todos.filter(todo => !todo.status).length;
    }
  },
  methods: {
    // 自动把data中的数据添加到全局this上，可通过this.数据访问
    addTodo () {
      if (!this.mytodo) return
      this.todos.push({status: false, thing: this.mytodo});
      this.mytodo = '';
    },
    toggle (i) {
      // 状态的切换！vue只要改变了数据，就会改变界面 状态 done true|false
      this.todos[i].status = !this.todos[i].status;
      // 取反的写法
    },
    clearTodo () {
      // 清空数组的写法
      this.todos = [];
    }
  },

  created () {
  }
}
</script>

<style scoped>
  /* 单页面组件 */
  .title {
    color: #ed1236;
    text-align: center;
  }
  ul.todos {
    margin: 20px;
  }
  input {
    border: 2px solid #ed1236;
  }
  .done {
    text-decoration: line-through;
  }
</style>
