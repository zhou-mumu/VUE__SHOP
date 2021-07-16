<template>
    <div>
        <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary" @click="showAddCateDialog">添加分类</el-button>
        </el-col>
      </el-row>

      <!-- 表格 -->

      <!-- 分页区域 -->

    </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 查询条件
            queryInfo: {
               type: 3,
               pagenum: 1,
               pagesize: 5
            },
            // 商品分类数据列表，默认为空
            cataList:[],
            // 总数据条数
            total: 0
        }
    },
    create() {
       this.getCateList()
    },
    methods: {
        // 获取商品分类数据
        async getCateList() {
          const {data: res} = await this.$http.get('catagories', { params:queryInfo })

          if(res.meta.status !== 200) {
              return this.$message.error('获取分类失败');
          }

          this.cataList = res.data.result
          this.total = res.data.total
        }
    }
}
</script>

<style lang="less" scoped>

</style>