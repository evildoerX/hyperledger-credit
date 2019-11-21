# 房产征信

## 服务引用图

## 结构图

## 用例图

### 角色说明

### 顶层用例图

@startuml
left to right direction
用户 --> (业务管理员)
(业务管理员) ..> (机构管理): <<include>>
(机构管理) ..> (添加机构): <<include>>
(机构管理) ..> (获取机构列表): <<include>>
(机构管理) ..> (获取某机构详情): <<include>>
(机构管理) ..> (更新机构信息): <<include>>
(机构管理) ..> (删除机构): <<include>>
(业务管理员) ..> (角色管理): <<include>>
(角色管理) ..> (添加角色): <<include>>
(角色管理) ..> (获取角色列表): <<include>>
(角色管理) ..> (更新角色信息): <<include>>
(角色管理) ..> (删除角色): <<include>>
(业务管理员) ..> (员工管理): <<include>>
(员工管理) ..> (添加员工): <<include>>
(员工管理) ..> (批量导入员工): <<include>>
(员工管理) ..> (获取员工类表): <<include>>
(员工管理) ..> (获取员工信息): <<include>>
(员工管理) ..> (更新员工信息): <<include>>
(员工管理) ..> (删除员工): <<include>>
(业务管理员) ..> (诚信管理): <<include>>
(诚信管理) ..> (违规管理): <<include>>
(违规管理) ..> (添加违规记录): <<include>>
(违规管理) ..> (获取违规记录列表): <<include>>
(违规管理) ..> (审核违规记录): <<include>>
(诚信管理) ..> (违规类型管理): <<include>>
(违规类型管理) ..> (添加违规类型): <<include>>
(违规类型管理) ..> (获取违规类型类表): <<include>>
(违规类型管理) ..> (更新违规类型): <<include>>
(诚信管理) ..> (投诉管理): <<include>>
(投诉管理) ..> (添加投诉): <<include>>
(投诉管理) ..> (获取投诉类表): <<include>>
(投诉管理) ..> (获取投诉详情): <<include>>
(投诉管理) ..> (更新投诉信息): <<include>>
(更新投诉信息) ..> (更新投诉信息备注): <<include>>
(更新投诉信息) ..> (转发投诉): <<include>>
(更新投诉信息) ..> (拒绝投诉): <<include>>
(诚信管理) ..> (申诉管理): <<include>>
(申诉管理) ..> (获取申诉列表): <<include>>
(申诉管理) ..> (更新申诉信息): <<include>>
(更新申诉信息) ..> (更新申诉状态：同意，拒绝): <<include>>
(更新申诉信息) ..> (更新申诉基础信息：备注等): <<include>>
(诚信管理) ..> (黑名单管理): <<include>>
(黑名单管理) ..> (获取黑名单列表): <<include>>
(黑名单管理) ..> (查看黑名单详情): <<include>>
(业务管理员) ..> (上岗证管理): <<include>>
(上岗证管理) ..> (添加上岗证): <<include>>
(上岗证管理) ..> (获取上岗证列表): <<include>>
(上岗证管理) ..> (获取上岗证信息): <<include>>
(上岗证管理) ..> (更新上岗证): <<include>>
(业务管理员) ..> (消息管理): <<include>>
(消息管理) ..> (获取消息列表): <<include>>
(消息管理) ..> (查看消息详情): <<include>>
(消息管理) ..> (添加消息): <<include>>
(消息管理) ..> (下载消息附件): <<include>>
@enduml

### 详细用例图

##  构件图

:::tip

```

```

:::

## E-R 图
![](./imgs/e-r.png)
## 数据表设计

### 经纪人违规表 agent_violation

| 列                | 类型                          | 注释                                                                             |
| ----------------- | ----------------------------- | -------------------------------------------------------------------------------- |
| id                | int(11) 自动增量              |
| appkey            | varchar(50) []                | appkey                                                                           |
| channel           | int(11) [0]                   | channelID                                                                        |
| agentAccountID    | varchar(64)                   | 经纪人 id                                                                        |
| certificateNumber | varchar(50)                   | 身份证号                                                                         |
| name              | varchar(50)                   | 用户名                                                                           |
| status            | tinyint(4) [2]                | 记录状态 1：待审核 2：审核通过 3：审核不通过添加其他违规 4：审核不通过撤销违规   |
| from              | tinyint(4) [1]                | 1：公司；2：区交易中心；3：区房管局；4：公安；5：工商（默认公司）；6：消费者投诉 |
| orgID             | varchar(64)                   | 经纪公司 ID                                                                      |
| txID              | varchar(100)                  | 链上插入成功返回的交易编号（调用链接口返回的参数                                 |
| violationDate     | datetime                      | 违规日期                                                                         |
| violationType     | int(11)                       | 违规类型，关联违规类型表的 id                                                    |
| violationReason   | varchar(200)                  | 违规具体内容                                                                     |
| created_at        | timestamp [CURRENT_TIMESTAMP] |
| updated_at        | timestamp [CURRENT_TIMESTAMP] |

### 违规类型表 violation_type

| 列            | 类型                          | 注释      |
| ------------- | ----------------------------- | --------- |
| id            | int(11) 自动增量              |
| violationName | varchar(50)                   | 失信名称  |
| description   | text                          | 违规描述  |
| appkey        | varchar(50) []                | appkey    |
| channel       | int(11) [0]                   | channelID |
| created_at    | timestamp [CURRENT_TIMESTAMP] |
| updated_at    | timestamp [CURRENT_TIMESTAMP] |

### 申诉 agent_violation_appeal

| 列                | 类型                          | 注释                                                   |
| ----------------- | ----------------------------- | ------------------------------------------------------ |
| id                | int(11) 自动增量              |
| appkey            | varchar(50) []                | appkey                                                 |
| channel           | int(11) [0]                   | channelID                                              |
| accountID         | varchar(64) []                | agent 的 accountID                                     |
| name              | varchar(50) []                | 经纪人姓名                                             |
| certificateNumber | varchar(60) []                | 身份证号（加密）                                       |
| status            | tinyint(4) [1]                | 审核状态 1：待审核 2：通过并撤销 3：通过并修改 4：拒绝 |
| currentViolation  | text                          | 新的违规记录，修改违规记录时更新该字段                 |
| material          | text                          | 申诉材料 url                                           |
| excelUrl          | text                          | 附件 excel 的 URL                                      |
| reason            | varchar(255) []               | 申诉理由                                               |
| args              | text                          | 扩展参数                                               |
| created_at        | timestamp [CURRENT_TIMESTAMP] |
| updated_at        | timestamp [CURRENT_TIMESTAMP] |

### 经纪公司投诉 company_complaint

| 列               | 类型                          | 注释                                      |
| ---------------- | ----------------------------- | ----------------------------------------- |
| id               | int(11) 自动增量              |
| appkey           | varchar(50) []                | appkey                                    |
| complaintChannel | smallint(6) [0]               | 投诉公司的 channel                        |
| complaintTel     | varchar(20) []                | 投诉公司的联系电话                        |
| orgName          | varchar(50) []                | 投诉方机构名称                            |
| channel          | smallint(6) [0]               | 被投诉公司的 channel                      |
| companyName      | varchar(50) []                | 被投诉非平台会员公司名，与 channel 二选一 |
| tel              | varchar(20) []                | 被投诉公司的联系电话                      |
| material         | text                          | 处理材料 URL                              |
| status           | tinyint(4) [1]                | 1:待处理 2:处理中 3:已处理                |
| processResult    | text                          | 处理意见                                  |
| reason           | varchar(255) []               | 投诉理由                                  |
| created_at       | timestamp [CURRENT_TIMESTAMP] |
| updated_at       | timestamp [CURRENT_TIMESTAMP] |

### 对经纪人的投诉 agent_complaint

| 列             | 类型                          | 注释                                                                                                                          |
| -------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| id             | int(11) 自动增量              |
| appkey         | varchar(50) []                | appkey                                                                                                                        |
| channel        | int(11) [0]                   | channelID                                                                                                                     |
| accountID      | varchar(64) []                | 经纪人 accountID                                                                                                              |
| agentPhone     | varchar(20) []                | 被投诉经纪人手机号                                                                                                            |
| complaintDate  | date                          | 投诉日期                                                                                                                      |
| address        | varchar(64)                   | 公司地址                                                                                                                      |
| agentName      | varchar(50)                   | 经纪人姓名                                                                                                                    |
| complaintName  | varchar(50)                   | 投诉人姓名                                                                                                                    |
| complaintPhone | varchar(20)                   | 投诉人电话                                                                                                                    |
| complaintDesc  | text                          | 投诉人内容                                                                                                                    |
| company        | varchar(50)                   | 公司名称                                                                                                                      |
| status         | tinyint(4) [1]                | 投诉处理状态 1：未处理 2：受理 3：驳回 4：admin 推给 HR（待转发） 5：HR 推还给 admin（处理中）6：HR 处理中 流程 1→4→6→5→2 / 3 |
| processPics    | text                          | hr 处理上传图片 URL                                                                                                           |
| processResult  | text                          | hr 处理意见                                                                                                                   |
| ipAddress      | varchar(20) []                | 客户端 ip                                                                                                                     |
| material       | text                          | 投诉材料 url                                                                                                                  |
| created_at     | timestamp [CURRENT_TIMESTAMP] |
| updated_at     | timestamp [CURRENT_TIMESTAMP] |

### 信访投诉 complaint_letter_visit

| 列              | 类型                          | 注释                                                                    |
| --------------- | ----------------------------- | ----------------------------------------------------------------------- |
| id              | int(11) 自动增量              |
| appkey          | varchar(50) []                | appkey                                                                  |
| channel         | int(11) [0]                   | 被投诉的经纪人所在公司 channel/被投诉的公司 channel，不填则为非会员公司 |
| comName         | varchar(50) []                | 公司名称                                                                |
| complaintName   | varchar(50) []                | 信访者姓名                                                              |
| complaintPhone  | varchar(20) []                | 信访者手机号                                                            |
| content         | text                          | 信访投诉内容                                                            |
| agentName       | varchar(50) []                | 被投诉者姓名                                                            |
| agentPhone      | varchar(20) []                | 被投诉者手机号                                                          |
| status          | bigint(20) [0]                | 信访投诉状态， 0：待处理，1：处理中，2：待审核，3：已处理               |
| result          | varchar(255) []               | 处理结果                                                                |
| material        | text                          | 信访投诉附件                                                            |
| processMaterial | text                          | 信访投诉附件                                                            |
| created_at      | timestamp [CURRENT_TIMESTAMP] |
| updated_at      | timestamp [CURRENT_TIMESTAMP] |

### 信访审核驳回表 visit_reject_log

| 列              | 类型                          | 注释                                        |
| --------------- | ----------------------------- | ------------------------------------------- |
| id              | int(11) 自动增量              |
| appkey          | varchar(50) []                | appkey                                      |
| channel         | int(11) [0]                   | channelID                                   |
| visitID         | int(11) [0]                   | complaint_letter_visit 对应的 ID            |
| result          | varchar(255) []               | 处理结果                                    |
| processMaterial | text                          | 处理附加的材料                              |
| rejectReason    | smallint(6) [0]               | 1：双方未达成一致，2：未联系投诉者，3：其他 |
| created_at      | timestamp [CURRENT_TIMESTAMP] |
| updated_at      | timestamp [CURRENT_TIMESTAMP] |

### 经纪人从业经历 agent_job_ext

| 列              | 类型                          | 注释                                             |
| --------------- | ----------------------------- | ------------------------------------------------ |
| id              | int(11) 自动增量              |
| appkey          | varchar(50) []                | appkey                                           |
| channel         | int(11) [0]                   | channelID                                        |
| agentAccountID  | varchar(255)                  |
| orgID           | varchar(64)                   | 经纪公司 ID                                      |
| orgName         | varchar(64)                   | 经纪公司 ID                                      |
| txID            | varchar(100)                  | 链上插入成功返回的交易编号（调用链接口返回的参数 |
| entryJob        | varchar(100)                  | 入职职位                                         |
| entryDate       | datetime                      | 入职职位                                         |
| departureDate   | datetime                      | 离职职位                                         |
| jobArea         | varchar(100)                  | 主要工作区域                                     |
| departureJob    | varchar(100)                  | 离职时职位                                       |
| departureReason | varchar(300)                  | 离职时职位                                       |
| created_at      | timestamp [CURRENT_TIMESTAMP] |
| updated_at      | timestamp [CURRENT_TIMESTAMP] |

### 消费者对经纪人的服务评价 agent_comment

| 列         | 类型                          | 注释                  |
| ---------- | ----------------------------- | --------------------- |
| id         | int(11) 自动增量              |
| appkey     | varchar(50) []                | appkey                |
| channel    | int(11) [0]                   | channelID             |
| accountID  | varchar(64) []                | agent 的 accountID    |
| customID   | varchar(64) []                | 添加评价的消费者的 ID |
| score1     | tinyint(4) [0]                | 评分 1 (1-5)          |
| score2     | tinyint(4) [0]                | 评分 2 (1-5)          |
| score3     | tinyint(4) [0]                | 评分 3 (1-5)          |
| score4     | tinyint(4) [0]                | 评分 4 (1-5)          |
| score5     | tinyint(4) [0]                | 评分 5 (1-5)          |
| ipAddress  | varchar(20) []                | 客户端 ip             |
| created_at | timestamp [CURRENT_TIMESTAMP] |
| updated_at | timestamp [CURRENT_TIMESTAMP] |

### 经纪人上岗证信息表 license_manage

| 列         | 类型                          | 注释                                              |
| ---------- | ----------------------------- | ------------------------------------------------- |
| id         | int(11) 自动增量              |
| accountID  | varchar(64)                   | accountID                                         |
| appkey     | varchar(50) []                | appkey                                            |
| channel    | int(11) [0]                   | channelID                                         |
| licenseUrl | varchar(255)                  | 上岗证图片 URL                                    |
| status     | tinyint(4) [2]                | 1:正常，2：待缴费，3：失效, 4：正在下载 5：已下载 |
| version    | tinyint(4) [1]                |
| effectDate | datetime                      | 生效日期                                          |
| expireDate | datetime                      | 失效日期                                          |
| created_at | timestamp [CURRENT_TIMESTAMP] |
| updated_at | timestamp [CURRENT_TIMESTAMP] |

### 下载上岗证记录 download_license_log

| 列         | 类型                          | 注释                                       |
| ---------- | ----------------------------- | ------------------------------------------ |
| id         | int(11) 自动增量              |
| appkey     | varchar(50) []                | appkey                                     |
| channel    | int(11) [0]                   | channelID                                  |
| zipUrl     | varchar(100) []               | 上岗证图片 zipURL                          |
| status     | tinyint(4)                    | 状态 1：正在下载 2：下载完成 3：用户已下载 |
| created_at | timestamp [CURRENT_TIMESTAMP] |
| updated_at | timestamp [CURRENT_TIMESTAMP] |

### 上岗证申请记录表 apply_license

| 列                | 类型                          | 注释                                                                                                        |
| ----------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------- |
| id                | int(11) 自动增量              |
| accountID         | varchar(64)                   | accountID                                                                                                   |
| appkey            | varchar(50) []                | appkey                                                                                                      |
| channel           | int(11) [0]                   | channelID                                                                                                   |
| orgName           | varchar(255)                  | 机构名                                                                                                      |
| name              | varchar(50) []                | 申请人姓名                                                                                                  |
| certificateNumber | varchar(80)                   | 申请人身份证号（加密）                                                                                      |
| phone             | varchar(50)                   | 申请人手机号（加密）                                                                                        |
| entryJob          | varchar(25)                   | 入职职位                                                                                                    |
| userAccountID     | varchar(64)                   | 操作者的 accountID                                                                                          |
| hrName            | varchar(50) []                | HR 姓名                                                                                                     |
| taskID            | int(11)                       | 审核通过后端渲染图片任务 ID，对应 timed_job_batch 里面的 ID                                                 |
| status            | tinyint(4) [0]                | 申请状态，0：待申请 1：待审核 2：审核通过正在生成信息卡 3：审核通过（待缴费） 4：被拒绝 5：已缴费           |
| effectDate        | datetime                      | 生效日期                                                                                                    |
| isAccord          | tinyint(4)                    | 是否符合资质，1：符合，2：不符合（信息不完整），3：不符合（在黑名单）,4：重复申请，-1：不符合（用户不存在） |
| created_at        | timestamp [CURRENT_TIMESTAMP] |
| updated_at        | timestamp [CURRENT_TIMESTAMP] |
| args              | text                          | 扩展信息                                                                                                    |

### 经纪人职业资格证 agent_credential

| 列                | 类型                          | 注释                                   |
| ----------------- | ----------------------------- | -------------------------------------- |
| id                | int(11) 自动增量              |
| appkey            | varchar(50) []                | appkey                                 |
| channel           | int(11) [0]                   | channelID                              |
| accountID         | varchar(64) []                | agent 的 accountID                     |
| name              | varchar(50) []                | 经纪人姓名                             |
| type              | tinyint(4) [1]                | 1：协理证；2：全国证                   |
| certificateNumber | varchar(60) []                | 身份证号（加密）                       |
| credentialNum     | varchar(60) []                | 证书编号                               |
| status            | tinyint(4) [1]                | 证书状态 1：待审核 2：已通过 3：未通过 |
| material          | text                          | 资格证书图片 url                       |
| created_at        | timestamp [CURRENT_TIMESTAMP] |
| updated_at        | timestamp [CURRENT_TIMESTAMP] |

### 链码环境变量 chain_env

| 列            | 类型                          | 注释      |
| ------------- | ----------------------------- | --------- |
| id            | int(11) 自动增量              |
| appkey        | varchar(50) []                | appkey    |
| channel       | int(11) [0]                   | channelID |
| channelName   | varchar(100)                  |
| chaincodeName | varchar(100)                  |
| invokePeers   | varchar(300)                  |
| queryPeers    | varchar(300)                  |
| created_at    | timestamp [CURRENT_TIMESTAMP] |
| updated_at    | timestamp [CURRENT_TIMESTAMP] |

### 链机构 chain_org

| 列           | 类型                          | 注释         |
| ------------ | ----------------------------- | ------------ |
| id           | int(11) 自动增量              |
| chainOrgName | varchar(50)                   | 链上机构名称 |
| orgDomain    | varchar(255)                  | 链上机构域名 |
| description  | varchar(255)                  | 描述         |
| sdkAddress   | varchar(255)                  | SDK 访问地址 |
| appkey       | varchar(50) []                | appkey       |
| channel      | int(11) [0]                   | channelID    |
| created_at   | timestamp [CURRENT_TIMESTAMP] |
| updated_at   | timestamp [CURRENT_TIMESTAMP] |

### 信息公告表 issue

| 列         | 类型                          | 注释                     |
| ---------- | ----------------------------- | ------------------------ |
| id         | int(11) 自动增量              |
| appkey     | varchar(50) []                | appkey                   |
| channel    | smallint(6) [0]               | channelID                |
| accountID  | varchar(64) []                | 发布者的 accountID       |
| name       | varchar(50) []                | 发布者姓名               |
| title      | varchar(120) [无标题]         | 标题                     |
| status     | tinyint(4) [1]                | 信息状态 1：发布 2：丢弃 |
| issueUrl   | varchar(255) []               | 信息 pdf 上传 url        |
| excelUrl   | text                          | 附件 excel 上传 url      |
| created_at | timestamp [CURRENT_TIMESTAMP] |
| updated_at | timestamp [CURRENT_TIMESTAMP] |

### 信息公告角色可见配置 issue_authority

| 列         | 类型                          | 注释                                   |
| ---------- | ----------------------------- | -------------------------------------- |
| id         | int(11) 自动增量              |
| appkey     | varchar(50) []                | appkey                                 |
| channel    | smallint(6) [0]               | channelID                              |
| issueID    | smallint(6) [0]               | issue 表的 id                          |
| roleID     | tinyint(4) [1]                | 1: admin 2:HR 3:gov 4:comAdmin 5:agent |
| created_at | timestamp [CURRENT_TIMESTAMP] |
| updated_at | timestamp [CURRENT_TIMESTAMP] |

### 机构扩展表 channel_ext

| 列         | 类型                          | 注释      |
| ---------- | ----------------------------- | --------- |
| id         | int(11) 自动增量              |
| appkey     | varchar(50) []                | appkey    |
| channel    | int(11) [0]                   | channelID |
| chainOrgID | int(11)                       | 机构 ID   |
| created_at | timestamp [CURRENT_TIMESTAMP] |
| updated_at | timestamp [CURRENT_TIMESTAMP] |

### 机构门店表 org_shop

| 列             | 类型                          | 注释                                        |
| -------------- | ----------------------------- | ------------------------------------------- |
| id             | int(11) 自动增量              |
| appkey         | varchar(50) []                | appkey                                      |
| channel        | int(11) [0]                   | channelID                                   |
| name           | varchar(100) []               | 门店名称                                    |
| manageStatus   | tinyint(4) [0]                | 经营状态 1:在营 2:新开 3:变更 4:迁址 5:注销 |
| type           | tinyint(4) [0]                | 门店类型 1:直营 2:加盟                      |
| prop           | tinyint(4) [0]                | 门店性质 1:产权 2:租赁                      |
| createdDate    | date                          | 成立日期                                    |
| beginDate      | date                          | 起始日期                                    |
| endDate        | date                          | 结束日期                                    |
| legalRepresent | varchar(50) []                | 法人代表                                    |
| curAddress     | varchar(255) []               | 实际办公地址                                |
| contact        | varchar(50) []                | 实际负责人                                  |
| contactTel     | varchar(25) []                | 联系电话                                    |
| totalNum       | int(11) [0]                   | 实际人数                                    |
| recordNum      | int(11) [0]                   | 备案人数                                    |
| secretKeyNum   | int(11) [0]                   | 密钥数量                                    |
| created_at     | timestamp [CURRENT_TIMESTAMP] |
| updated_at     | timestamp [CURRENT_TIMESTAMP] |

### 数据分析-数仓 cidata_db

| 列         | 类型                          | 注释      |
| ---------- | ----------------------------- | --------- |
| id         | int(11) 自动增量              |
| appkey     | varchar(50) []                | appkey    |
| channel    | int(11) [0]                   | channelID |
| name       | varchar(50) []                | 数仓名称  |
| dwhID      | int(11) [0]                   | 数仓 ID   |
| desc       | varchar(255) []               | 描述      |
| created_at | timestamp [CURRENT_TIMESTAMP] |
| updated_at | timestamp [CURRENT_TIMESTAMP] |

### 数据分析-任务 cidata_task

| 列          | 类型                          | 注释                                    |
| ----------- | ----------------------------- | --------------------------------------- |
| id          | int(11) 自动增量              |
| appkey      | varchar(50) []                | appkey                                  |
| channel     | int(11) [0]                   | channelID                               |
| name        | varchar(50) []                | 任务名                                  |
| taskID      | int(11) [0]                   | 任务 ID                                 |
| desc        | varchar(255) []               | 描述                                    |
| type        | tinyint(4) [0]                | 统计类型，1:count, 2:sum, 3:cardinality |
| modelConfig | text                          | 统计模式配置                            |
| created_at  | timestamp [CURRENT_TIMESTAMP] |
| updated_at  | timestamp [CURRENT_TIMESTAMP] |

### 数据分析-数表 cidata_tbl

| 列         | 类型                          | 注释      |
| ---------- | ----------------------------- | --------- |
| id         | int(11) 自动增量              |
| appkey     | varchar(50) []                | appkey    |
| channel    | int(11) [0]                   | channelID |
| name       | varchar(50) []                | 数表名称  |
| tbID       | int(11) [0]                   | 数表 ID   |
| desc       | varchar(255) []               | 描述      |
| fields     | text                          | 字段定义  |
| indexes    | varchar(255) []               | 索引      |
| created_at | timestamp [CURRENT_TIMESTAMP] |
| updated_at | timestamp [CURRENT_TIMESTAMP] |

## 接口设计

### 1.1 添加/更新经纪人（编辑经纪人信息跟新增分开处理，详见 1.57）

### 1.2 批量添加经纪人（添加头像图片压缩包处理）待测试优化

### 1.3 查询经纪人信息（根据 accountID 查询）

### 1.4 获取员工（经纪人）列表（去掉了在职离职条件筛选；添加一个字段：增加信息卡状态 0：待申请；1：待审核；2：审核通过；3：审核未通过；4：禁业）待测试

### 1.5 添加经纪人违规信息（红线违规更新 ext_int_3 黑名单字段为 1）

### 1.6 批量添加经纪人违规记录（红线违规更新 ext_int_3 黑名单字段为 1）

### 1.7 查询经纪人违规信息列表

### 1.8 查询经纪人从业经历

### 1.9 模糊查询经纪人

### 1.10 新增职位类型（1.14 代替）

### 1.11 新增/修改违规类型（已更新）

### 1.12 查询职位类型列表（1.15 代替）

### 1.13 查询违规类型列表（已更新）

### 1.14 新增/编辑 oa 岗位/职称

### 1.15 获取 oa 岗位/职称列表

### 1.16 删除 oa 岗位/职称

### 1.17 查询经纪人就业信息（by secret）

### 1.18 查询经纪人违规信息（by secret）

### 1.19 员工离职

### 1.20 查询经纪人信息（by name&&certificateNumber）

### 1.21 查询经纪人信息（by name）

### 1.22 查询用户上传记录

### 1.23 查询批量上传错误

### 1.24 超级批量添加/更新经纪人（待定，测试）

### 1.25 获取从业人员信息卡二维码信息

### 1.26 信用查询经纪人列表（by name && channel=>orgID 跟 1.21 类似，暂时缺链码接口，这一版暂时先用 oa 查询接口！！！）

### 1.27 添加投诉

### 1.28 批量上传评分(5 种评分分开)/星级【后端除了基本的数据分组插入数据库处理 + 更新评分 log 表】

### 1.29 查询评分/星级导入记录

### 1.30 扫码获取从业人员信息

### 1.31 获取投诉列表

### 1.32 处理投诉 （支持批量）

### 1.33 查询经纪人违规信息（by certificateNumber）

### 1.34 获取员工上岗证列表（符合资质/不符合资质/全部）这边是否需要过滤掉已有上岗证的员工（用扩展字段标注是否有上岗证 ext_int_4）；已申请过的还未审核的员工怎么说，是否需要展示 请求参数以及返回参数参照前端界面图

### 1.35HR 申请机构经纪人上岗证（单条/多条批量）已完成，未测试

### 1.36 一键申请经纪人上岗证 (已完成，待测试。初版，性能差）

### 1.37 获取上岗证申请列表（协会管理员） 已完成，待测试

### 1.38 获取申请上岗证结果列表（### 1.37 详情查看 HR 姓名）已完成，待测试

### 1.39 单条/批量审核通过（已完成，待测试）

### 1.40 单条/批量审核拒绝（已完成 待测试）

### 1.41 员工黑名单列表（Admin 全平台，HR 不用这个）（ext_int_3=1 的 userList）是否在职？？不分在职离职（没有籍贯字段） 已完成，待测试

### 1.45 协会管理员获取黑名单（查询 agent_violation 表）

### 1.52 登录(获取经纪人信息：基本登录信息+是否已缴费；可跟### 5.7 合并）

### 1.54 经纪人缴费

### 1.55 经纪人获取个人基本信息（跟### 1.3 合并）

### 1.56 经纪人登录认证 待测试

### 1.57 编辑经纪人信息（单条） 已完成，待测试

### 1.58 协会管理员查询经纪人违规信息（by certificateNumber + name（二选一或两者都传））已完成待测试

### 1.59 查询违规信息 by accountID （已完成，待测试）

### 1.60 查询经纪人信息（by certificateNumber）

### 1.61 查询一键申请、审核状态

### 1.62 一键审核通过 已完成，待测试

### 1.63 一键拒绝审核（不符合资质） 已完成，待测试

### 1.64 消费者添加评价 已完成，待测试

### 1.65 获取经纪人评价 已完成，待测试

### 1.66 查询经纪人（By Name） 已完成，待测试

### 1.67 经纪人添加行业证书 已完成，待测试

### 1.68 获取经济人行业证书列表 已完成，待测试

### 1.69 审核通过经纪人行业证书 已完成，待测试

### 1.70 审核拒绝经纪人行业证书 已完成，待测试

### 1.71 违规记录申诉 已完成，待测试

### 1.72 获取申诉列表 已完成，待测试

### 1.73 通过申诉并撤销违规记录 已完成，待测试

### 1.74 通过申诉并修改违规记录 已完成，待测试

### 1.75 拒绝申诉 已完成，待测试

### 1.76 消费者查询违规记录 by secret 已完成，待测试

### 1.77 协会推送投诉记录给 HR 已完成，待测试

### 1.78 HR 推还投诉记录给协会 已完成，待测试

### 1.79 通过投诉并添加违规记录 已完成，待测试

### 1.80 拒绝投诉 已完成，待测试

### 1.81 获取待审核严重违规记录列表 已完成，待测试

### 1.82 通过审核并修改违规记录 已完成，待测试

### 1.83 拒绝并撤销严重违规记录 已完成，待测试

### 1.84 通过审核严重违规记录 已完成，待测试

### 1.85 发布信息看板 已完成，待测试

### 1.86 获取信息看板列表 已完成，待测试

### 1.87 删除信息看板 已完成，待测试

### 1.88 添加信访记录

### 1.89 获取信访投诉列表

### 1.90 推送信访记录给 HR（单条／批量）

### 1.91 非平台经纪公司点击处理信访记录

### 1.92 处理非平台经纪公司信访记录

### 1.93 HR 处理经纪公司信访记录

### 1.94 通过经纪公司信访投诉

### 1.95 驳回经纪公司信访投诉

### 1.96 获取经纪公司信访投诉驳回列表

### 1.97 HR 标记投诉状态为处理中 已完成，待测试

### 1.98 查询经纪人严重违规记录 by certNum 已完成，待测试

### 1.99 admin 添加经纪人违规信息(单条）

### 1.100 一键下载上岗证 已完成，待测试

### 1.101 查看上岗证下载日志列表 已完成，待测试

### 1.102 添加经纪公司投诉 已完成，待测试

### 1.103 获取经纪公司投诉列表 已完成，待测试

### 1.104 标记投诉状态为处理中 已完成，待测试

### 1.105 标记经纪公司投诉状态为已处理 已完成，待测试

### 1.106 获取信息卡审核通过列表（已完成，待测试）

### 1.107 获取申诉列表 已完成，待测试

### 2.运维接口（链相关接口）

### 2.1 获取所有链参数

### 2.2 设置/更新链参数

### 2.3 获取链参数

### 2.4 删除某个链参数

### 2.5 新增或修改链上机构

### 2.6 查看某个链上机构具体信息

### 2.7 查看所有链上机构

### 2.8 新增经纪公司运维

### 3.机构管理

### 3.1 添加/编辑机构（经纪公司）（编辑分开处理详见### 3.9，新增多个字段）已完成，待测试

### 3.2 新增经纪公司 HR

### 3.3 查看经纪公司（获取机构下子机构列表 添加检索条件：机构名称；经纪公司信息的字段名要跟### 3.1 对应）

### 3.4 启用/停用经纪公司

### 3.5 删除员工

### 3.6 获取 HR 列表

### 3.7 注册超管

### 3.8 注册 guest

### 3.9 编辑机构（经纪公司） 已完成，待测试

### 3.10 查看机构详情 已完成，待测试

### 3.11 新增机构门店 已完成，待测试

### 3.12 获取门店列表 已完成，待测试

### 3.13 删除门店 已完成，待测试

### 3.14 编辑门店信息 已完成，待测试

### 3.15 新增经纪公司管理者

### 3.15 新增政府管理者

### 3.16 获取经纪公司管理者列表

### 3.17 获取政府管理者列表

### 4.ACL 管理

### 5.登录服务

### 5.1 获得机构下的所有机构（同### 3.3 这边是获取所有机构 跟### 3.3 不同！）

### 5.2 用户登录

### 5.3 用户登出

### 5.4 发送手机验证码（内网测试不会给爪机发验证码，统一用 8888）

### 5.5 验证手机验证码

### 5.6 重置密码

### 5.7 用户登录（不选机构）

### 5.8 访问用户伪登录（根据 guestID 直接调用 chainLogin 接口伪登录获取 chainToken 信息，前端保存到 localStorage（确认下是否可以保存））
