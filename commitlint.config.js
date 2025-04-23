module.exports = {
  extends: ['@commitlint/config-conventional'], // 继承官方推荐规则
  rules: {
    // 以下是增强规则（可自定义调整）
    'type-enum': [
      2, // 2 表示必须遵守
      'always',
      [
        'feat', // 新功能
        'fix', // Bug 修复
        'docs', // 文档变更
        'style', // 代码格式（不影响逻辑）
        'refactor', // 重构（非功能更改）
        'test', // 测试相关
        'chore', // 构建/工具依赖
        'perf', // 性能优化
        'build', // 构建流程
        'ci', // CI 配置
        'revert', // 回滚提交
      ],
    ],
    'type-case': [2, 'always', 'lower-case'], // 类型必须小写
    'type-empty': [2, 'never'], // 类型不能为空
    'subject-case': [1, 'always', 'sentence-case'], // 标题建议首字母大写
    'subject-empty': [2, 'never'], // 标题不能为空
    'subject-max-length': [1, 'always', 72], // 标题长度建议（非强制）
    'body-leading-blank': [1, 'always'], // body 前需空行
    'footer-leading-blank': [1, 'always'], // footer 前需空行
  },
};
