<template>
<i :class="classes"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: String
  },
  computed: {
    classes: function () {
      return ['vc-icon', 'vc-icon-' + this.type].join(' ')
    }
  }
}
</script>

<style>
@font-face {
  font-family: "icon-bass";
  src: url('./font/icon-bass.eot');
  src: url('./font/icon-bass.eot?#iefix') format('eot'),
    url('./font/icon-bass.woff2') format('woff2'),
    url('./font/icon-bass.woff') format('woff'),
    url('./font/icon-bass.ttf') format('truetype'),
    url('./font/icon-bass.svg#.icon-bass') format('svg');
  font-weight: normal;
  font-style: normal;
}
.vc-icon:before {
  display: inline-block;
  font-family: "icon-bass";
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.vc-icon-arrow-left:before { content: "\EA01" }
.vc-icon-arrow-right:before { content: "\EA02" }
.vc-icon-arrow-down:before { content: "\EA03" }
.vc-icon-km:before { content: "\EA04" }
.vc-icon-task:before { content: "\EA05" }
.vc-icon-project:before { content: "\EA06" }
.vc-icon-moreapp:before { content: "\EA07" }
.vc-icon-calendar:before { content: "\EA08" }
.vc-icon-analytics:before { content: "\EA09" }
.vc-icon-arrow-up:before { content: "\EA11" }
.vc-icon-edit:before { content: "\EA12" }
.vc-icon-trig-down:before { content: "\EA13" }
.vc-icon-trig-up:before { content: "\EA14" }
.vc-icon-arrow-next:before { content: "\EA15" }
.vc-icon-arrow-prev:before { content: "\EA16" }
.vc-icon-archive:before { content: "\EA17" }
.vc-icon-search:before { content: "\EA18" }
.vc-icon-close:before { content: "\EA19" }
.vc-icon-start-round:before { content: "\EA21" }
.vc-icon-flag:before { content: "\EA22" }
.vc-icon-clock:before { content: "\EA23" }
.vc-icon-user:before { content: "\EA24" }
.vc-icon-add-round:before { content: "\EA25" }
.vc-icon-add:before { content: "\EA26" }
.vc-icon-task-check:before { content: "\EA27" }
.vc-icon-return:before { content: "\EA28" }
.vc-icon-notification:before { content: "\EA29" }
.vc-icon-back:before { content: "\EA31" }
.vc-icon-checked:before { content: "\EA32" }
.vc-icon-done:before { content: "\EA33" }
.vc-icon-start:before { content: "\EA34" }
.vc-icon-notification-unread:before { content: "\EA35" }
.vc-icon-warning:before { content: "\EA36" }
.vc-icon-comment:before { content: "\EA37" }
.vc-icon-stop-round:before { content: "\EA38" }
.vc-icon-checkbox:before { content: "\EA39" }
.vc-icon-filetype-doc:before { content: "\EA41"; color: #0a96e5;}
.vc-icon-filetype-pdf:before { content: "\EA42"; color: #e3574d;}
.vc-icon-filetype-folder:before { content: "\EA43"; color: #cdc9c5;}
.vc-icon-filetype-video:before { content: "\EA44"; color: #d94ff5;}
.vc-icon-filetype-music:before { content: "\EA45"; color: #a7d638;}
.vc-icon-filetype-zip:before { content: "\EA46"; color: #9d7120;}
.vc-icon-filetype-image:before { content: "\EA47"; color: #07cfda;}
.vc-icon-filetype-excel:before { content: "\EA48"; color: #1c7044;}
.vc-icon-filetype-default:before { content: "\EA49"; color: #cdc9c5;}
.vc-icon-info:before { content: "\EA51" }
.vc-icon-alpha:before { content: "\EA52" }
.vc-icon-link:before { content: "\EA53" }
.vc-icon-dot:before { content: "\EA54" }
.vc-icon-filetype-ppt:before { content: "\EA55"; color: #d04424;}
.vc-icon-settings:before { content: "\EA56" }
.vc-icon-restore:before { content: "\EA57" }
.vc-icon-delete:before { content: "\EA58" }
.vc-icon-list:before { content: "\EA59" }
.vc-icon-company:before { content: "\EA61" }
.vc-icon-timer-hand:before { content: "\EA62" }
.vc-icon-timer-body:before { content: "\EA63" }
.vc-icon-timer:before { content: "\EA64" }
.vc-icon-list-add:before { content: "\EA65" }
.vc-icon-project-type4:before { content: "\EA66" }
.vc-icon-project-type3:before { content: "\EA67" }
.vc-icon-project-type2:before { content: "\EA68" }
.vc-icon-project-type1:before { content: "\EA69" }
.vc-icon-filter:before { content: "\EA71" }
.vc-icon-category:before { content: "\EA72" }
.vc-icon-process:before { content: "\EA73" }
.vc-icon-paper:before { content: "\EA74" }
.vc-icon-firm:before { content: "\EA75" }
.vc-icon-clerk:before { content: "\EA76" }
.vc-icon-judge:before { content: "\EA77" }
.vc-icon-lawyer:before { content: "\EA78" }
.vc-icon-team:before { content: "\EA79" }
.vc-icon-ilaw:before { content: "\EA81" }
.vc-icon-tools:before { content: "\EA82" }
.vc-icon-customer:before { content: "\EA83" }
.vc-icon-hr:before { content: "\EA84" }
.vc-icon-add-fill:before { content: "\EA85" }
.vc-icon-minus-fill:before { content: "\EA86" }
.vc-icon-checkmark:before { content: "\EA87" }
.vc-icon-stop:before { content: "\EA88" }
.vc-icon-download:before { content: "\EA89" }
.vc-icon-share:before { content: "\EA91" }
.vc-icon-location:before { content: "\EA92" }
.vc-icon-phone:before { content: "\EA93" }
.vc-icon-email:before { content: "\EA94" }
.vc-icon-user-female:before { content: "\EA95" }
.vc-icon-smart:before { content: "\EA96" }
.vc-icon-logout:before { content: "\EA97" }
.vc-icon-chart-bar:before { content: "\EA98" }
.vc-icon-chart-line:before { content: "\EA99" }
.vc-icon-minus-round:before { content: "\EB01" }
.vc-icon-chart-pie:before { content: "\EB02" }
.vc-icon-chart-map:before { content: "\EB03" }
.vc-icon-customer-service:before { content: "\EB04" }
.vc-icon-marker:before { content: "\EB05" }
.vc-icon-copy:before { content: "\EB06" }
.vc-icon-star:before { content: "\EB07" }
.vc-icon-star-fill:before { content: "\EB08" }
.vc-icon-heart:before { content: "\EB09" }
.vc-icon-pin:before { content: "\EB11" }
.vc-icon-required:before { content: "\EB12" }
.vc-icon-customer-surprise:before { content: "\EB13" }
.vc-icon-text:before { content: "\EB14" }
.vc-icon-field-casade:before { content: "\EB15" }
.vc-icon-insert:before { content: "\EB16" }
.vc-icon-case:before { content: "\EB17" }
.vc-icon-attachment:before { content: "\EB18" }
.vc-icon-heart-fill:before { content: "\EB19" }
.vc-icon-trig-right:before { content: "\EB21" }
.vc-icon-trig-left:before { content: "\EB22" }
.vc-icon-bold:before { content: "\EB23" }
.vc-icon-italic:before { content: "\EB24" }
.vc-icon-underline:before { content: "\EB25" }
.vc-icon-plus-square:before { content: "\EB26" }
.vc-icon-minus-square:before { content: "\EB27" }
.vc-icon-chart-bar-h:before { content: "\EB28" }
.vc-icon-task-pad:before { content: "\EB29" }
.vc-icon-schedule:before { content: "\EB31" }
.vc-icon-upload:before { content: "\EB32" }
.vc-icon-tag:before { content: "\EB33" }
.vc-icon-sort:before { content: "\EB34" }
.vc-icon-more:before { content: "\EB35" }
.vc-icon-side-column:before { content: "\EB36" }
.vc-icon-window-fullscreen:before { content: "\EB37" }
.vc-icon-mute:before { content: "\EB38" }
.vc-icon-locked:before { content: "\EB39" }
.vc-icon-spanner:before { content: "\EB41" }
.vc-icon-alarm:before { content: "\EB42" }
.vc-icon-loop:before { content: "\EB43" }
.vc-icon-unlocked:before { content: "\EB44" }
.vc-icon-memo:before { content: "\EB45" }
.vc-icon-emoji:before { content: "\EB52" }
.vc-icon-snap:before {content: "\EB53"}
</style>
