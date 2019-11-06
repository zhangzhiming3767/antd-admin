import React, { PureComponent,Component } from 'react'
import { connect } from 'dva'
import { Page } from 'components';
import { FormComponentProps } from 'antd/lib/form'
import {
  Form,
  Table,
} from 'antd';
// interface IState {

// }

// interface IProps extends FormComponentProps{
//   articleMgr: any,
//   dispatch?: any
// }

@connect(({ menuMgr, loading }) => ({
  menuMgr,
  getMenuListLoading: loading.effects['menuMgr/getMenuList']
}))
class MenuMgr extends PureComponent {
  constructor(props) {
    super(props)
  }
  state = {
    pageList: [],
    pagination: {
      pageSize: 10,
      current: 1,
      total: 0,
      showTotal: total => `当前共 ${total} 条数据`
    },
  }
  componentDidMount() {
    this.getMenuList();
  }


  getMenuList = () => {
    const { dispatch } = this.props;
    let params = {};
    dispatch({
      type: 'menuMgr/getMenuList',
      payload: params,
      callback: (res) => {
        this.setState({
          pageList: res.datas
        })
      }
    })
  }

  columns = [
    {
      title: '菜单名称',
      dataIndex: 'menuName',
      align: 'left',
      width: 80,
    }, {
      title: '菜单地址',
      dataIndex: 'menuUrl',
      align: 'left',
      width: 80,
    },
    {
      title: 'icon',
      dataIndex: 'icon',
      align: 'left',
      width: 80,
    },
  ]

  render() {
    const { getMenuListLoading } = this.props;
    const { pageList } = this.state;
    const { current, total, pageSize } = this.state.pagination;
    return (
      <React.Fragment>
       
        <div >
          <Page inner>
          <Table
              // rowSelection={rowSelection}
              // bordered={false}
              dataSource={pageList}
              columns={this.columns}
              // className={styles.roleTable}
              loading={getMenuListLoading}
              rowKey="id"
              page
              scroll={{ x: 1160, y: false }}
              pagination={{
                current: current,
                total: total,
                pageSize: 10,
                showTotal: (total) => `当前共 ${total} 条数据`
              }}
              // onChange={this.listArticle}
            />
          </Page>

         
        </div>
      </React.Fragment >
    );
  }
}


export default Form.create()(MenuMgr)
