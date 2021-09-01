import {
  create,
  NForm,
  NFormItem,
  NInput,
  NIcon,
  NCheckbox,
  NButton,
  NLoadingBarProvider,
  NMessageProvider,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NSpace,
  NCard,
  NDataTable,
  NSelect,
  NModal,
  NText,
  NFormItemGi,
  NGrid,
  NAvatar,
  NGi,
  NList,
  NListItem,
  NThing,
  NSkeleton,
  NSpin,
  NTabs,
  NTabPane,
  NDrawer,
  NDrawerContent,
  NSwitch,
  NTooltip,
  NRadioGroup,
  NRadio,
  NInputNumber,
  NImage,
  NRadioButton,
} from 'naive-ui';

const naive = create({
  components: [
    NForm,
    NFormItem,
    NInput,
    NIcon,
    NCheckbox,
    NButton,
    NLoadingBarProvider,
    NMessageProvider,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NSpace,
    NCard,
    NDataTable,
    NSelect,
    NModal,
    NText,
    NFormItemGi,
    NGrid,
    NAvatar,
    NGi,
    NList,
    NListItem,
    NThing,
    NSkeleton,
    NSpin,
    NTabs,
    NTabPane,
    NDrawer,
    NDrawerContent,
    NSwitch,
    NTooltip,
    NRadioGroup,
    NRadio,
    NInputNumber,
    NImage,
    NRadioButton,
  ],
});

export function setupNaive(app) {
  app.use(naive);
}
