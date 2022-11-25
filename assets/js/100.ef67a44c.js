(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{723:function(s,n,a){"use strict";a.r(n);var e=a(5),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[s._v("​\tLinux general command, operation, maintenance, Deployment,etc")]),s._v(" "),a("p",[a("a",{attrs:{href:"www.deep-diary.com"}},[s._v("点击免费观看教学视频")])])]),s._v(" "),a("h1",{attrs:{id:"linux-operation-and-maintenance"}},[s._v("Linux Operation and Maintenance")]),s._v(" "),a("h2",{attrs:{id:"general-command"}},[s._v("General command")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.runoob.com/linux/linux-comm-ps.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux ps 命令 | 菜鸟教程 (runoob.com)"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"process-state"}},[s._v("Process State")]),s._v(" "),a("p",[s._v("Linux ps （英文全拼：process status）命令用于显示当前进程的状态，类似于 windows 的任务管理器。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[s._v("语法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ps [options] [--help]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("参数")]),s._v("：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("ps 的参数非常多, 在此仅列出几个常用的参数并大略介绍含义")])]),s._v(" "),a("li",[a("p",[s._v("-A 列出所有的进程")])]),s._v(" "),a("li",[a("p",[s._v("-w 显示加宽可以显示较多的资讯")])]),s._v(" "),a("li",[a("p",[s._v("-au 显示较详细的资讯")])]),s._v(" "),a("li",[a("p",[s._v("-aux 显示所有包含其他使用者的进程")])]),s._v(" "),a("li",[a("p",[s._v("au(x) 输出格式 :")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("USER: 行程拥有者")]),s._v(" "),a("li",[s._v("PID: pid")]),s._v(" "),a("li",[s._v("%CPU: 占用的 CPU 使用率")]),s._v(" "),a("li",[s._v("%MEM: 占用的记忆体使用率")]),s._v(" "),a("li",[s._v("VSZ: 占用的虚拟记忆体大小")]),s._v(" "),a("li",[s._v("RSS: 占用的记忆体大小")]),s._v(" "),a("li",[s._v("TTY: 终端的次要装置号码 (minor device number of tty)")]),s._v(" "),a("li",[s._v("STAT: 该行程的状态:\n"),a("ul",[a("li",[s._v("D: 无法中断的休眠状态 (通常 IO 的进程)")]),s._v(" "),a("li",[s._v("R: 正在执行中")]),s._v(" "),a("li",[s._v("S: 静止状态")]),s._v(" "),a("li",[s._v("T: 暂停执行")]),s._v(" "),a("li",[s._v("Z: 不存在但暂时无法消除")]),s._v(" "),a("li",[s._v("W: 没有足够的记忆体分页可分配")]),s._v(" "),a("li",[s._v("<: 高优先序的行程")]),s._v(" "),a("li",[s._v("N: 低优先序的行程")]),s._v(" "),a("li",[s._v("L: 有记忆体分页分配并锁在记忆体内 (实时系统或捱A I/O)")])])]),s._v(" "),a("li",[s._v("START: 行程开始时间")]),s._v(" "),a("li",[s._v("TIME: 执行的时间")]),s._v(" "),a("li",[s._v("COMMAND:所执行的指令")])])])]),s._v(" "),a("h3",{attrs:{id:"实例"}},[s._v("实例")]),s._v(" "),a("p",[s._v("查找指定进程格式：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ps -ef | grep 进程关键字\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("例如显示 php 的进程：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# ps -ef | grep php\nroot       794     1  0  2020 ?        00:00:52 php-fpm: master process (/etc/php/7.3/fpm/php-fpm.conf)\nwww-data   951   794  0  2020 ?        00:24:15 php-fpm: pool www\nwww-data   953   794  0  2020 ?        00:24:14 php-fpm: pool www\nwww-data   954   794  0  2020 ?        00:24:29 php-fpm: pool www\n...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("显示进程信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# ps -A \nPID TTY     TIME CMD\n  1 ?    00:00:02 init\n  2 ?    00:00:00 kthreadd\n  3 ?    00:00:00 migration/0\n  4 ?    00:00:00 ksoftirqd/0\n  5 ?    00:00:00 watchdog/0\n  6 ?    00:00:00 events/0\n  7 ?    00:00:00 cpuset\n  8 ?    00:00:00 khelper\n  9 ?    00:00:00 netns\n  10 ?    00:00:00 async/mgr\n  11 ?    00:00:00 pm\n  12 ?    00:00:00 sync_supers\n  13 ?    00:00:00 bdi-default\n  14 ?    00:00:00 kintegrityd/0\n  15 ?    00:00:02 kblockd/0\n  16 ?    00:00:00 kacpid\n  17 ?    00:00:00 kacpi_notify\n  18 ?    00:00:00 kacpi_hotplug\n  19 ?    00:00:27 ata/0\n……省略部分结果\n30749 pts/0  00:00:15 gedit\n30886 ?    00:01:10 qtcreator.bin\n30894 ?    00:00:00 qtcreator.bin \n31160 ?    00:00:00 dhclient\n31211 ?    00:00:00 aptd\n31302 ?    00:00:00 sshd\n31374 pts/2  00:00:00 bash\n31396 pts/2  00:00:00 ps\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("显示指定用户信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# ps -u root //显示root进程用户信息\n PID TTY     TIME CMD\n  1 ?    00:00:02 init\n  2 ?    00:00:00 kthreadd\n  3 ?    00:00:00 migration/0\n  4 ?    00:00:00 ksoftirqd/0\n  5 ?    00:00:00 watchdog/0\n  6 ?    00:00:00 events/0\n  7 ?    00:00:00 cpuset\n  8 ?    00:00:00 khelper\n  9 ?    00:00:00 netns\n  10 ?    00:00:00 async/mgr\n  11 ?    00:00:00 pm\n  12 ?    00:00:00 sync_supers\n  13 ?    00:00:00 bdi-default\n  14 ?    00:00:00 kintegrityd/0\n  15 ?    00:00:02 kblockd/0\n  16 ?    00:00:00 kacpid\n……省略部分结果\n30487 ?    00:00:06 gnome-terminal\n30488 ?    00:00:00 gnome-pty-helpe\n30489 pts/0  00:00:00 bash\n30670 ?    00:00:00 debconf-communi \n30749 pts/0  00:00:15 gedit\n30886 ?    00:01:10 qtcreator.bin\n30894 ?    00:00:00 qtcreator.bin \n31160 ?    00:00:00 dhclient\n31211 ?    00:00:00 aptd\n31302 ?    00:00:00 sshd\n31374 pts/2  00:00:00 bash\n31397 pts/2  00:00:00 ps\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("p",[s._v("显示所有进程信息，连同命令行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# ps -ef //显示所有命令，连带命令行\nUID    PID PPID C STIME TTY     TIME CMD\nroot     1   0 0 10:22 ?    00:00:02 /sbin/init\nroot     2   0 0 10:22 ?    00:00:00 [kthreadd]\nroot     3   2 0 10:22 ?    00:00:00 [migration/0]\nroot     4   2 0 10:22 ?    00:00:00 [ksoftirqd/0]\nroot     5   2 0 10:22 ?    00:00:00 [watchdog/0]\nroot     6   2 0 10:22 ?    /usr/lib/NetworkManager\n……省略部分结果\nroot   31302 2095 0 17:42 ?    00:00:00 sshd: root@pts/2 \nroot   31374 31302 0 17:42 pts/2  00:00:00 -bash\nroot   31400   1 0 17:46 ?    00:00:00 /usr/bin/python /usr/sbin/aptd\nroot   31407 31374 0 17:48 pts/2  00:00:00 ps -ef\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"memory"}},[s._v("Memory")]),s._v(" "),a("p",[s._v("内存的管理和优化，是 Linux 系统性能优化的重要组成部分，换句话说，内存资源是否充足，会直接影响应用系统（包含操作系统和应用程序）的使用性能。")]),s._v(" "),a("p",[s._v("本节将介绍几个系统命令，通过它们，可以快速查看 Linux 系统中内存的使用状况。")]),s._v(" "),a("h3",{attrs:{id:"linux查看内存使用情况-free命令"}},[s._v("Linux查看内存使用情况：free命令")]),s._v(" "),a("p",[s._v("free 是监控 Linux 内存使用状况最常用的命令之一，有关该命令的基本用法，已经在《"),a("a",{attrs:{href:"http://c.biancheng.net/view/1083.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux free命令"),a("OutboundLink")],1),s._v("》一节中做了详细介绍，所以不再赘述，这里重点给大家讲解如何使用 free 命令查看系统内存的使用情况。")]),s._v(" "),a("p",[s._v("下面是 free 命令在当前测试系统中的输出结果：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost  ~]# free -m\n             total       used       free     shared    buffers     cached\nMem:          2004        573       1431          0         47        201\n-/+ buffers/cache:        323       1680\nSwap:         1983          0       1983\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("从输出结果可以看到，该系统共 2GB 内存，其中系统空闲内存还有 1431MB，并且 swap 交换分区还未使用，因此可以判断出当前系统的内存资源还非常充足。")]),s._v(" "),a("p",[s._v("除此之外，free 命令还可以实时地监控内存的使用状况，通过使用 -s 选项，可以实现在指定的时间段内不间断地监控内存的使用情况。例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost ~]# free -m -s 5\n             total       used       free     shared    buffers     cached\nMem:          2004        571       1433          0         47        202\n-/+ buffers/cache:        321       1683\nSwap:         1983          0       1983\n\n             total       used       free     shared    buffers     cached\nMem:          2004        571       1433          0         47        202\n-/+ buffers/cache:        321       1683\nSwap:         1983          0       1983\n#省略后续输出\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("要想实现动态地监控内存使用状况，除了使用 free 命令提供的 -s 选项，还可以借助 watch 命令。通过给 watch 命令后面添加需要运行的命令，watch 就会自行重复去运行这个命令（默认 2 秒执行一次），例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost ~]# watch -n 3 -d free\nEvery 3.0s: free                                        Tue Oct 29 03:05:43 2019\n\n             total       used       free     shared    buffers     cached\nMem:       2052988     586504    1466484          0      49184     207360\n-/+ buffers/cache:     329960    1723028\nSwap:      2031608          0    2031608\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("上面执行的命令中，-n 选项用于执行重复执行的间隔时间，-d 选项用于在显示数据时，高亮显示变动了的数据。")]),s._v(" "),a("h3",{attrs:{id:"linux查看内存使用情况-vmstat命令"}},[s._v("Linux查看内存使用情况：vmstat命令")]),s._v(" "),a("p",[s._v("vmstat 命令在监控系统内存方面的功能很强大，有关此命令的基本用法，已经在《"),a("a",{attrs:{href:"http://c.biancheng.net/view/1081.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux vmstat命令"),a("OutboundLink")],1),s._v("》一节中做了详细介绍，这里重点讲解如何使用此命令查看内存的使用状况。")]),s._v(" "),a("p",[s._v("下面是执行 vmstat 命令的输出结果：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost ~]# vmstat 2 3\nprocs -----------memory---------- ---swap-- -----io---- --system-- -----cpu-----\nr  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n0  0      0 1436128  53004 210744    0    0     7     0   13   14  0  0 100  0  0\n1  0      0 1436112  53004 210744    0    0     0     0  128  226  0  0 100  0  0\n0  0      0 1435988  53004 210744    0    0     0     0  144  220  1  0 99  0  0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("对于内存的监控，我们只需要重点关注 swpd、si 和 so 这 3 列。从此输出结果可以看出，当前系统中，虚拟内存没有使用，硬盘和内存之间没有交换数据，可见内存资源处于空闲状态。")]),s._v(" "),a("h3",{attrs:{id:"linux查看内存使用情况-sar命令"}},[s._v("Linux查看内存使用情况：sar命令")]),s._v(" "),a("p",[s._v("sar 命令也可以用来监控 Linux 的内存使用状况，通过“sar -r”组合可以查看系统内存和交换空间的使用率。")]),s._v(" "),a("blockquote",[a("p",[s._v("有关 sar 命令的基本用法，可以阅读《"),a("a",{attrs:{href:"http://c.biancheng.net/view/6212.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux sar命令"),a("OutboundLink")],1),s._v("》一文做详细了解。")])]),s._v(" "),a("p",[s._v("如下是执行“sar -r”命令的输出结果：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost ~]# sar -r 2 3\nLinux 2.6.32-431.el6.x86_64 (localhost)  10/29/2019  _x86_64_ (8 CPU)\n\n04:54:20 AM kbmemfree kbmemused  %memused kbbuffers  kbcached  kbcommit   %commit\n04:54:22 AM   1218760    834228     40.63     53228    424908    738312     18.08\n04:54:24 AM   1218744    834244     40.64     53228    424908    738312     18.08\n04:54:26 AM   1218712    834276     40.64     53228    424908    738312     18.08\nAverage:      1218739    834249     40.64     53228    424908    738312     18.08\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("此输出结果中，各个参数表示的含义如下：")]),s._v(" "),a("ul",[a("li",[s._v("kbmemfree：表示空闲的物理内存的大小；")]),s._v(" "),a("li",[s._v("kbmemeused：表示已使用的物理内存的大小；")]),s._v(" "),a("li",[s._v("%memused：表示已使用内存占总内存大小的百分比；")]),s._v(" "),a("li",[s._v("kbbuffers：表示缓冲区所使用的物理内存的大小；")]),s._v(" "),a("li",[s._v("kbcached：表示告诉缓存所使用的物理内存的大小；")]),s._v(" "),a("li",[s._v("kbcommit 和 %commit：分别表示当前系统中应用程序使用的内存大小和百分比；")])]),s._v(" "),a("p",[s._v("相比 free 命令，sar 命令的输出信息更加人性化，不仅给出了内存使用量，还给出了内存使用的百分比以及统计的平均值。比如说，仅通过 %commit 一项就可以得知，当前系统中的内存资源充足。")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://c.biancheng.net/view/6269.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux查看内存使用情况方法汇总 (biancheng.net)"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"查看某个进程的使用内存"}},[s._v("查看某个进程的使用内存")]),s._v(" "),a("p",[s._v("通过： ps aux | sort -k4,4nr | head -n 10 查看内存占用前10名的程序")]),s._v(" "),a("p",[s._v("[Linux下查看某一进程所占用内存的方法 - 小得盈满 - 博客园 (cnblogs.com)](https://www.cnblogs.com/freeweb/p/5407105.html#:~:text=Linux下查看某一个进程所占用的内存，首先可以通过ps命令找到进程id，比如 ps -ef | grep,kafka 可以看到kafka这个程序的进程id 可以看到是2913，现在可以使用如下命令查看内存： top -p 2913)")]),s._v(" "),a("h2",{attrs:{id:"vim"}},[s._v("vim")])])}),[],!1,null,null,null);n.default=t.exports}}]);