Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Type of Household Below Poverty'
    },
    subtitle: {
      text: 'Source: U.S. Census Bureau'
    },
    xAxis: {
        categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020']
    },
    yAxis: {
      title: {
        text: 'Number of Families'
      }
    },
    series: [{
      name: 'Married',
      data: [3735, 3245, 3096, 2933, 2938, 2507, 2866]
    }, {
      name: 'Male Householder',
      data: [969, 939, 847, 853, 824, 746, 796]
    }, {
        name: 'Female Householder',
        data: [4764, 4404, 4138, 4005, 3742, 3300, 3633]
      }]
  });

  Highcharts.chart('container2', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Type of Household In Poverty'
    },
    subtitle: {
      text: 'Source: U.S. Census Bureau'
    },
    xAxis: {
      categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020']
    },
    yAxis: {
      title: {
        text: 'Number of Families'
      }
    },
    series: [{
        name: 'Married',
        data: [60015, 60258, 60821, 61883, 61971, 62355, 61463]
    }, {
        name: 'Male Householder',
        data: [6162, 6311, 6452, 6351, 6485, 6506, 6964]
    }, {
        name: 'Female Householder',
        data: [15553, 15630, 15581, 15305, 15052, 14838, 15491]
    }]
  });
