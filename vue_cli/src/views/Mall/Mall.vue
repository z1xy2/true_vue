<template>
  <div class="content">
    <el-row>
      <el-col id="title" :span="24">
        <h1>PDB Parse</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :span="24"
        style="
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <span>
          <div class="input-suffix">
            <el-input
              placeholder="ID/NAME"
              v-model="input1"
              style="width: 500px"
            >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </span>
        <div class="control_file">
          <div>
            <el-dropdown>
              <span
                class="el-dropdown-link"
                style="color: black; font-weight: bolder"
              >
                <i class="el-icon-document el-icon--right"></i>
                display files<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div style="background: #409eff">
            <el-dropdown>
              <span
                class="el-dropdown-link"
                style="color: white; font-weight: bolder"
              >
                <i class="el-icon-download el-icon--right"></i>
                download files<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" id="content1">
        <el-card class="info" id="type" shadow="hover">
          <el-button type="primary" class="info_btn">Mole Type</el-button>
          <span>111</span>
        </el-card>
        <el-card class="info" id="seq" shadow="hover">
          <el-scrollbar style="width: 750px; height: 150px">
            <p>
              <el-button type="primary" class="info_btn">Sequence</el-button
              >MRKFNSHSIPIRLNLLFSIVILLFMTIIGRLLYMQVLNKDFYEKKLASASQTKITSSSAR
              GEIYDASGKPLVENTLKQVVSFTRSNKMTATDLKETAKKLLTYVSISSPNLTERQLADYY
              LADPEIYKKIVEALPSEKRLDSDGNRLSESELYNNAVDSVQTSQLNYTEDEKKEIYLFSQ
              LNAVGNFATGTIATDPLNDSQVAVIASISKEMPGISISTSWDRKVLETSLSSIVGSVSSE
              KAGLPAEEAEAYLKKGYSLNDRVGTSYLEKQYEETLQGKRSVKEIHLDKYGNMESVDTIE
              EGSKGNNIKLTIDLAFQDSVDALLKSYFNSELENGGAKYSEGVYAVALNPKTGAVLSMSG
              IKHDLKTGELTPDSLGTVTNVFVPGSVVKAATISSGWENGVLSGNQTLTDQSIVFQGSAP
              INSWYTQAYGSFPITAVQALEYSSNTYMVQTALGLMGQTYQPNMFVGTSNLESAMEKLRS
              TFGEYGLGTATGIDLPDESTGFVPKEYSFANYITNAFGQFDNYTPMQLAQYVATIANNGV
              RVAPRIVEGIYGNNDKGGLGDLIQQLQPTEMNKVNISDSDMSILHQGFYQVAHGTSGLTT
              GRAFSNGALVSISGKTGTAESYVADGQQATNTNAVAYAPSDNPQIAVAVVFPHNTNLTNG
              VGPSIARDIINLYQKYHPMN
            </p>
          </el-scrollbar>
        </el-card>
        <el-card class="zb info" shadow="hover">
          <div class="head">
            <h2 class="in_title">ATOM</h2>
            <el-dropdown>
              <span class="el-dropdown-link"
                >More
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Download</el-dropdown-item>
                <el-dropdown-item>Total Data</el-dropdown-item>
                <el-dropdown-item>series</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <el-table :data="tableData" height="100%" stripe style="width: 100%">
            <el-table-column prop="category" label="类型" width="180">
            </el-table-column>
            <el-table-column prop="num" label="原子序号" width="180">
            </el-table-column>
            <el-table-column prop="atom_name" label="原子名称" width="180">
            </el-table-column>
            <el-table-column prop="residues" label="残基名称" width="180">
            </el-table-column>
            <el-table-column
              prop="chain_identifier"
              label="链标识符"
              width="180"
            >
            </el-table-column>
            <el-table-column prop="residues_num" label="残疾序列号" width="180">
            </el-table-column>
            <el-table-column prop="atom_lcation" label="原子坐标" width="180">
            </el-table-column>
            <el-table-column prop="temperature" label="温度因子" width="180">
            </el-table-column>
            <el-table-column prop="element_symbol" label="元素符号" width="180">
            </el-table-column>
          </el-table>
          <el-button
            icon="el-icon-bottom"
            size="mini"
            font-size="10px"
            @click="dialogTableVisible = true"
            >Show all num</el-button
          >
        </el-card>
        <el-card class="zb info" shadow="hover">
          <div class="head">
            <h2 class="in_title">HETATM</h2>
            <el-dropdown>
              <span class="el-dropdown-link"
                >More
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Download</el-dropdown-item>
                <el-dropdown-item>Total Data</el-dropdown-item>
                <el-dropdown-item>series</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <el-table :data="tableData" height="100%" stripe style="width: 100%">
            <el-table-column prop="date" label="1" width="180">
            </el-table-column>
            <el-table-column prop="name" label="2" width="180">
            </el-table-column>
            <el-table-column prop="address" label="3"> </el-table-column>
          </el-table>
          <el-button
            icon="el-icon-bottom"
            size="mini"
            font-size="10px"
            @click="dialogTableVisible = true"
            >Show all num</el-button
          >
        </el-card>
      </el-col>
      <el-col :span="12" id="content2">
        <div id="select_file">
          <el-card id="r1" shadow="hover">
            <div id="upload">
              <div class="head_r1">
                <h2 class="in_title" id="r1_title">
                  select file <i class="el-icon-folder"></i>
                </h2>
              </div>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </el-card>
          <el-card id="r2" shadow="hover">
            <div class="head_r2">
              <i class="el-icon-caret-left i_change" style=""></i>
              <h2 class="in_title" id="r2_title">Biological Assembly</h2>
              <i class="el-icon-caret-right i_change"></i>
            </div>
            <div id="r2_footer" style="line-height: 0px">
              <p
                style="
                  width: auto;
                  height: auto;
                  display: inline-block !important;
                  font-weight: bolder;
                  margin-right: 20px;
                  margin-left: 20px;
                "
              >
                <i class="el-icon-box"></i>3D View:
              </p>
              <el-button size="mini" type="primary">Structure</el-button>
              <el-button size="mini" type="primary">Electron</el-button>
              <el-button size="mini" type="primary">Density</el-button>
              <el-button size="mini" type="primary"
                >Ligand Interaction</el-button
              >
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-dialog
      title="信息展示和下载界面"
      class="show_data"
      :visible.sync="dialogTableVisible"
      center
      top="10vh"
    >
      <div>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="类型"></el-checkbox>
          <el-checkbox label="原子序号"></el-checkbox>
          <el-checkbox label="原子名称"></el-checkbox>
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
        </el-checkbox-group>
      </div>
      <el-table :data="tableData">
        <el-table-column prop="category" label="类型"> </el-table-column>
        <el-table-column prop="category" label="类型"> </el-table-column>
        <el-table-column prop="num" label="原子序号"> </el-table-column>
        <el-table-column prop="atom_name" label="原子名称"> </el-table-column>
        <el-table-column prop="residues" label="残基名称"> </el-table-column>
        <el-table-column prop="chain_identifier" label="链标识符">
        </el-table-column>
        <el-table-column prop="residues_num" label="残疾序列号">
        </el-table-column>
        <el-table-column prop="atom_lcation" label="原子坐标" width="180">
        </el-table-column>
        <el-table-column prop="temperature" label="温度因子" width="180">
        </el-table-column>
        <el-table-column prop="element_symbol" label="元素符号">
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible2">
      <el-table :data="gridData2">
        <el-table-column
          property="date"
          label="日期"
          width="150"
        ></el-table-column>
        <el-table-column
          property="name"
          label="姓名"
          width="200"
        ></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
  <!--
  <div>
  </div> -->
</template>
<script>
export default {
  data() {
    return {
      checkList: [],
      input1: "",
      atomPropList: ["category", "num", "atom_name", "residues", "chain_identifier", "residues_num", "atom_lcation", "temperature", "element_symbol"],
      atomLabelList: ["类型", "原子序号", "原子名称", "残基名称", "链标识符", "残疾序列号", "原子坐标", "温度因子", "元素符号"],
      tableData: [{
        category: '1',
        num: '1',
        atom_name: '1',
        residues: '1',
        chain_identifier: '1',
        residues_num: '2016-05-02',
        atom_lcation: '王小虎',
        temperature: '上海市普陀区金沙江路 1518 弄',
        element_symbol: 'N'
      }, {
        category: '1',
        num: '1',
        atom_name: '1',
        residues: '1',
        chain_identifier: '1',
        residues_num: '2016-05-02',
        atom_lcation: '王小虎',
        temperature: '上海市普陀区金沙江路 1518 弄',
        element_symbol: 'N'
      }, {
        category: '1',
        num: '1',
        atom_name: '1',
        residues: '1',
        chain_identifier: '1',
        residues_num: '2016-05-02',
        atom_lcation: '王小虎',
        temperature: '上海市普陀区金沙江路 1518 弄',
        element_symbol: 'N'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }],
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      gridData2: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible2: false,
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>
<style scoped>
@import "~@/assets/scss/mall.scss";
</style>
