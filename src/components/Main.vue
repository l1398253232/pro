<template>
    <div>
       {{author}}
       <i class="el-icon-error"></i>
       <el-button type='primary' @click="del()">按钮</el-button>
       <el-progress :percentage="50" status="exception"></el-progress>
       <p>使用 render-content</p>
        <el-tree
        :data="data4"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :render-content="renderContent">
        </el-tree>
    </div>
</template>

<script>
    import axios from 'axios'
    let id = 1000;
    export default {
        
         data() {
      const data = [{
        id: 1,
        label: '李钰 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      return {
        data4: JSON.parse(JSON.stringify(data)),
        data5: JSON.parse(JSON.stringify(data))
      }
    },
        computed:{
            author(){
                return this.$store.state.author
            }
        },
        created(){
            var _this = this;
            var url = "http://106.37.229.146:4001/JCSJ/Search_qj?pageIndex=0&pageSize=100";
            axios.get(url).then(function(res){
                _this.items = res.data.data
                console.log(_this.items)
            })
        },
        methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>);
      },
      del(){
            alert(11)
        }
    }
    }
</script>

<style scoped>
    
</style>