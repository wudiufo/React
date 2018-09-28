
import React from 'react'

// 导入列表组件需要的样式表
// 问题：这个样式表，是只在List组件中生效吗?
// 经过试验：发现，直接导入css样式表，默认是在全局上，整个项目都生效的

// 思考：Vue组件中的样式表，有没有冲突的问题？？
// 答案：Vue组件中的样式表，也有冲突的问题，但是，可以使用<style scoped></style>来解决

// 疑问：React中，有没有类似于scoped这样的指令呢？
// 答案：没有，因为在React中，根本就没有指令的概念
import cssobj from '@/css/cmtlist.scss'
console.log(cssobj)

// 如果在引用某个包的时候，这个包被安装到了node_modules目录中，
// 则，可以省略node_modules这一层目录，直接以包名开始引入自己的模块或样式表
// 自己规定：第三方的样式表，都是以.css结尾，这样不需要为普通的.css启用模块化
// 自己的样式表，都要以.scss或.less结尾，只为.scss或.less文件启用模块化
import 'bootstrap/dist/css/bootstrap.css'



// 导入评论项子组件
import CmtItem from '@/components/CmtItem2'


// 使用class关键字，定义父组件
export default class CmtList extends React.Component {
  constructor() {
    super()
    this.state = {
      CommentList: [ //评论列表数据
        { id: 1, user: 'zz', content: 'hello' },
        {
          id: 2,
          user: 'zz2',
          content: 'hello'
        }, {
          id: 3,
          user: 'zz3',
          content: 'hello'
        }, {
          id: 4,
          user: 'zz4',
          content: 'hello'
        },
      ]
    }
  }

  render() {
    return <div>
      
      {/* <h1 className={cssobj.title + 'test'} > 这是评论列表组件 </h1> */}
      
      <h1 className={[cssobj.title, 'test'].join(' ')} > 这是评论列表组件 </h1>
       {/* <button className={[bootcss.btn, bootcss['btn-primary']].join(' ')}>按钮</button> */}
      <button className="btn btn-primary">按钮啊</button>
      
      <div className="panel panel-primary"></div>

      {
        this.state.CommentList.map(item =>
          < CmtItem {...item}
            key={item.id} > < /CmtItem>)
        }
    
        
       

        </div>
        }
    }
    
