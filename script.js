// For more animation visit http://jasaniweb.com/

var DEG = 180 / Math.PI;

var drag = document.querySelector("#drag");
var path = document.querySelector("#path");

var pathLength = path.getTotalLength() || 0;
var startPoint = path.getPointAtLength(0);
var startAngle = getRotation(startPoint, path.getPointAtLength(0.1));
var lastPoint = path.getPointAtLength(0);
var lastLength = 0;

var drawTween = TweenMax.from("#drawMe", 1, {
  drawSVG: "0%",
  paused: true,
  ease: Linear.easeNone
});

TweenLite.set(drag, {
  transformOrigin: "center",
  rotation: startAngle + "_rad",
  xPercent: -50,
  yPercent: -50,
  x: startPoint.x,
  y: startPoint.y
});

var draggable = new Draggable(drag, {
  liveSnap: {
    points: pointModifier
  }
});

TweenLite.set(".container", {
  autoAlpha: 1
});

function pointModifier(point) {
  var p = closestPoint(path, pathLength, point);

  TweenLite.set(drag, {
    rotation: p.rotation
  });

  lastPoint.x = point.x;
  lastPoint.y = point.y;
  lastLength = p.length;

  console.log(lastLength)

  let val = lastLength
  
    if(val > 0 && val < 14){
      $(".year span").text("1547")
    }else if(val >= 14 && val < 28){
      $(".year span").text("1548")
    }else if(val >= 28 && val < 42){
      $(".year span").text("1549")
    } else if(val >= 42 && val < 56){
      $(".year span").text("1550")
    }else if(val >= 56 && val < 70){
      $(".year span").text("1551")
    }else if(val >= 70 && val < 84){
      $('#vmap').css('background-image','url("./img/Russia-map-1552.png")')
      $(".year span").text("1552")
    } else if(val >= 84 && val < 98){
      $(".year span").text("1553")
    }else if(val >= 98 && val < 112){
      $(".year span").text("1554")
    }else if(val >= 112 && val < 126){
      $(".year span").text("1555")
    }else if(val >= 126 && val < 140){
      $('#vmap').css('background-image','url("./img/Russia-map-1556.png")')
      $(".year span").text("1556")
    }else if(val >= 140 && val < 154){
      $(".year span").text("1557")
    }else if(val >= 154 && val < 168){
      $(".year span").text("1558")
    }else if(val >= 168 && val < 182){
      $(".year span").text("1559")
    }else if(val >= 182 && val < 200){
      $(".year span").text("1560")
      $(".details > div").hide()
      $(".details > div").eq(1).show()
    }

    else if(val >= 200 && val < 250){
      $(".year span").text("1561")
    }else if(val >= 250 && val < 300){
      $(".year span").text("1562")
    }else if(val >= 300 && val < 350){
      $(".year span").text("1563")
    }else if(val >= 400 && val < 450){
      $(".year span").text("1564")
    }else if(val >= 450 && val < 500){
      $(".year span").text("1565")
      $(".details > div").hide()
      $(".details > div").eq(2).show()
    }

    else if(val >= 500 && val < 506){
      $(".year span").text("1567")
    }else if(val >= 508 && val < 516){
      $(".year span").text("1568")
    }else if(val >= 516 && val < 524){
      $(".year span").text("1569")
    }else if(val >= 524 && val < 532){
      $(".year span").text("1570")
    }else if(val >= 532 && val < 540){
      $(".year span").text("1571")
    }else if(val >= 540 && val < 548){
      $(".year span").text("1572")
      $(".details > div").hide()
      $(".details > div").eq(3).show()
    }

    else if(val >= 548 && val < 553){
      $(".year span").text("1573")
    }else if(val >= 553 && val < 558){
      $(".year span").text("1574")
    }else if(val >= 558 && val < 563){
      $(".year span").text("1575")
    }else if(val >= 563 && val < 568){
      $(".year span").text("1576")
    }else if(val >= 568 && val < 573){
      $(".year span").text("1577")
    }else if(val >= 573 && val < 578){
      $(".year span").text("1578")
    }else if(val >= 578 && val < 583){
      $(".year span").text("1579")
    }else if(val >= 583 && val < 588){
      $(".year span").text("1580")
    }else if(val >= 588 && val < 593){
      $(".year span").text("1581")
      $('#vmap').css('background-image','url("./img/Russia-map-1581.png")')
    }else if(val >= 593 && val < 598){
      $(".year span").text("1582")
    }else if(val >= 598 && val < 603){
      $(".year span").text("1583")
      $('#vmap').css('background-image','url("./img/Russia-map-1583.png")')
    }else if(val >= 603 && val < 608){
      $(".year span").text("1584")
    }else if(val >= 608 && val < 613){
      $(".year span").text("1585")
    }else if(val >= 613 && val < 618){
      $(".year span").text("1586")
    }else if(val >= 618 && val < 623){
      $(".year span").text("1587")
    }else if(val >= 623 && val < 628){
      $(".year span").text("1588")
    }else if(val >= 628 && val < 633){
      $(".year span").text("1589")
    }else if(val >= 633 && val < 638){
      $(".year span").text("1590")
    }else if(val >= 638 && val < 643){
      $(".year span").text("1591")
    }else if(val >= 643 && val < 648){
      $(".year span").text("1592")
    }else if(val >= 648 && val < 650){
      $(".year span").text("1593")
    }else if(val >= 650 && val < 653){
      $(".year span").text("1594")
    }else if(val >= 653 && val < 656){
      $(".year span").text("1595")
    }else if(val >= 656 && val < 659){
      $(".year span").text("1596")
    }else if(val >= 659 && val < 662){
      $(".year span").text("1597")
    }else if(val >= 662 && val < 675){
      $(".year span").text("1598")
      $(".details > div").hide()
      $(".details > div").eq(4).show()
    }
    
    
    else if(val >= 675 && val < 692){
      $(".year span").text("1599")
    }else if(val >= 692 && val < 709){
      $(".year span").text("1600")
    }else if(val >= 709 && val < 726){
      $(".year span").text("1601")
    }else if(val >= 726 && val < 732){
      $(".year span").text("1602")
    } else if(val >= 732 && val < 749){
      $(".year span").text("1603")
    }else if(val >= 749 && val < 766){
      $(".year span").text("1604")
    } else if(val >= 766 && val < 783){
      $(".year span").text("1605")
    } else if(val >= 783 && val < 800){
      $(".year span").text("1606")
    } else if(val >= 800 && val < 817){
      $(".year span").text("1607")
    } else if(val >= 817 && val < 834){
      $(".year span").text("1608")
    }else if(val >= 834 && val < 851){
      $(".year span").text("1609")
    }else if(val >= 851 && val < 868){
      $(".year span").text("16010")
    }else if(val >= 868 && val < 885){
      $(".year span").text("16011")
    }else if(val >= 885 && val < 902){
      $(".year span").text("16012")
    }else if(val >= 902 && val < 942){
      $(".year span").text("1613")
      $(".details > div").hide()
      $(".details > div").eq(5).show()
    }
    
    
    else if(val >= 945 && val < 954){
      $(".year span").text("1614")
    }else if(val >= 954 && val < 963){
      $(".year span").text("1615")
    } else if(val >= 963 && val < 972){
      $(".year span").text("1616")
    } else if(val >= 972 && val < 981){
      $(".year span").text("1617")
    } else if(val >= 981 && val < 990){
      $(".year span").text("1618");
      $('#vmap').css('background-image','url("./img/Russia-map-1618.png")')
    }else if(val >= 990 && val < 999){
      $(".year span").text("1619")
    }else if(val >= 999 && val < 1008){
      $(".year span").text("1620")
    }else if(val >= 1008 && val < 1017){
      $(".year span").text("1621")
    }else if(val >= 1017 && val < 1026){
      $(".year span").text("1622")
    }else if(val >= 1026 && val < 1035){
      $(".year span").text("1623")
    }else if(val >= 1035 && val < 1044){
      $(".year span").text("1624")
    }else if(val >= 1044 && val < 1053){
      $(".year span").text("1625")
    }else if(val >= 1053 && val < 1062){
      $(".year span").text("1626")
    }else if(val >= 1062 && val < 1071){
      $(".year span").text("1627")
    }else if(val >= 1071 && val < 1080){
      $(".year span").text("1628")
    }else if(val >= 1080 && val < 1089){
      $(".year span").text("1629")
    }else if(val >= 1089 && val < 1098){
      $(".year span").text("1630")
    }else if(val >= 1098 && val < 1107){
      $(".year span").text("1631")
    }else if(val >= 1107 && val < 1126){
      $(".year span").text("1632")
    }else if(val >= 1126 && val < 1130){
      $(".year span").text("1633")
    }else if(val >= 1130 && val < 1136){
      $(".year span").text("1634");
      $('#vmap').css('background-image','url("./img/Russia-map-1634.png")')
    }else if(val >= 1136 && val < 1142){
      $(".year span").text("1635")
    }else if(val >= 1142 && val < 1148){
      $(".year span").text("1636")
    }else if(val >= 1148 && val < 1156){
      $(".year span").text("1637")
    }else if(val >= 1156 && val < 1162){
      $(".year span").text("1638")
    }else if(val >= 1162 && val < 1170){
      $(".year span").text("1639")
    } else if(val >= 1170 && val < 1185){
      $(".year span").text("1640")
      $(".details > div").hide()
      $(".details > div").eq(6).show()
      $('#vmap').css('background-image','url("./img/Russia-map-1649.png")')
    }

    else if(val >= 1185 && val < 1215){
      $(".year span").text("1641")
    }else if(val >= 1215 && val < 1245){
      $(".year span").text("1642")
    }else if(val >= 1245 && val < 1275){
      $(".year span").text("1643")
    }else if(val >= 1275 && val < 1305){
      $(".year span").text("1644")
    }else if(val >= 1305 && val < 1335){
      $(".year span").text("1645")
    }else if(val >= 1335 && val < 1365){
      $(".year span").text("1646")
    }else if(val >= 1365 && val < 1395){
      $(".year span").text("1647")
    }else if(val >= 1395 && val < 1425){
      $(".year span").text("1648")
    }else if(val >= 1425 && val < 1455){
      $(".year span").text("1649")
      $(".details > div").hide()
      $(".details > div").eq(7).show()
    }else if(val >= 1455 && val < 1496){
      $(".year span").text("1649")
      $(".details > div").hide()
      $(".details > div").eq(8).show()
    }

    else if(val >= 1496 && val < 1540){
      $(".year span").text("1650")
    } else if(val >= 1540 && val < 1595){
      $(".year span").text("1651")
    } else if(val >= 1595 && val < 1640){
      $(".year span").text("1652")
    } else if(val >= 1640 && val < 1685){
      $(".year span").text("1653")
      $(".details > div").hide()
      $(".details > div").eq(9).show()
    } 
    
    else if(val >= 1685 && val < 1685 + (17 * 1) ){
      $(".year span").text("1654")
    } else if(val >= 1685 + (17 * 1) && val < 1685 + (17 * 2) ){
      $(".year span").text("1655")
    } else if(val >= 1685 + (17 * 2) && val < 1685 + (17 * 3) ){
      $(".year span").text("1656")
    } else if(val >= 1685 + (17 * 3) && val < 1685 + (17 * 4) ){
      $(".year span").text("1657")
    } else if(val >= 1685 + (17 * 4) && val < 1685 + (17 * 5) ){
      $(".year span").text("1658")
    } else if(val >= 1685 + (17 * 5) && val < 1685 + (17 * 6) ){
      $(".year span").text("1659")
    } else if(val >= 1685 + (17 * 6) && val < 1685 + (17 * 7) ){
      $(".year span").text("1660")
    } else if(val >= 1685 + (17 * 7) && val < 1685 + (17 * 8) ){
      $(".year span").text("1661")
    } else if(val >= 1685 + (17 * 8) && val < 1685 + (17 * 9) ){
      $(".year span").text("1662")
    } else if(val >= 1685 + (17 * 9) && val < 1685 + (17 * 10) ){
      $(".year span").text("1663")
    } else if(val >= 1685 + (17 * 10) && val < 1685 + (17 * 11) ){
      $(".year span").text("1664")
    } else if(val >= 1685 + (17 * 11) && val < 1685 + (17 * 12) ){
      $(".year span").text("1665")
    } else if(val >= 1685 + (17 * 12) && val < 1685 + (17 * 13) ){
      $(".year span").text("1666")
    } else if(val >= 1685 + (17 * 13) && val < 1685 + (17 * 14) ){
      $(".year span").text("1667")
      $(".details > div").hide()
      $(".details > div").eq(10).show()
    }

    
    else if(val >= 1920 && val < 1920 + (21.8 * 1) ){
      $(".year span").text("1668")
    } else if(val >= 1920 + (21.8 * 1) && val < 1920 + (21.8 * 2) ){
      $(".year span").text("1669")
    } else if(val >= 1920 + (21.8 * 2) && val < 1920 + (21.8 * 3) ){
      $(".year span").text("1670")
    } else if(val >= 1920 + (21.8 * 3) && val < 1920 + (21.8 * 4) ){
      $(".year span").text("1671")
    } else if(val >= 1920 + (21.8 * 4) && val < 1920 + (21.8 * 5) ){
      $(".year span").text("1672")
    } else if(val >= 1920 + (21.8 * 5) && val < 1920 + (21.8 * 6) ){
      $(".year span").text("1673")
    } else if(val >= 1920 + (21.8 * 6) && val < 1920 + (21.8 * 7) ){
      $(".year span").text("1674")
    } else if(val >= 1920 + (21.8 * 7) && val < 1920 + (21.8 * 8) ){
      $(".year span").text("1675")
    } else if(val >= 1920 + (21.8 * 8) && val < 1920 + (21.8 * 9) ){
      $(".year span").text("1676")
      $(".details > div").hide()
      $(".details > div").eq(11).show()
    } 

    else if(val >= 2150 && val < 2150 + (60 * 1) ){
      $(".year span").text("1677")
    } else if(val >= 2150 + (60 * 1) && val < 2150 + (60 * 2) ){
      $(".year span").text("1678")
    } else if(val >= 2150 + (60 * 2) && val < 2150 + (60 * 3) ){
      $(".year span").text("1679")
    } else if(val >= 2150 + (60 * 3) && val < 2150 + (60 * 4) ){
      $(".year span").text("1681")
    } else if(val >= 2150 + (60 * 4) && val < 2150 + (60 * 5) ){
      $(".year span").text("1682")
      $(".details > div").hide()
      $(".details > div").eq(12).show()
    }

    else if(val >= 2475 && val < 2475 + (7.23 * 1) ){
      $(".year span").text("1683")
    } else if(val >= 2475 && val < 2475 + (7.23 * 2) ){
      $(".year span").text("1684")
    } else if(val >= 2475 && val < 2475 + (7.23 * 3) ){
      $(".year span").text("1685")
    } else if(val >= 2475 && val < 2475 + (7.23 * 4) ){
      $(".year span").text("1686")
      $('#vmap').css('background-image','url("./img/Russia-map-1686.png")')
    } else if(val >= 2475 && val < 2475 + (7.23 * 5) ){
      $(".year span").text("1687")
    } else if(val >= 2475 && val < 2475 + (7.23 * 6) ){
      $(".year span").text("1688")
    } else if(val >= 2475 && val < 2475 + (7.23 * 7) ){
      $(".year span").text("1689")
      $('#vmap').css('background-image','url("./img/Russia-map-1689.png")')
    } else if(val >= 2475 && val < 2475 + (7.23 * 8) ){
      $(".year span").text("1690")
    } else if(val >= 2475 && val < 2475 + (7.23 * 9) ){
      $(".year span").text("1691")
    } else if(val >= 2475 && val < 2475 + (7.23 * 10) ){
      $(".year span").text("1692")
    } else if(val >= 2475 && val < 2475 + (7.23 * 11) ){
      $(".year span").text("1693")
    } else if(val >= 2475 && val < 2475 + (7.23 * 12) ){
      $(".year span").text("1694")
    } else if(val >= 2475 && val < 2475 + (7.23 * 13) ){
      $(".year span").text("1695")
    } else if(val >= 2475 && val < 2475 + (7.23 * 14) ){
      $(".year span").text("1696")
      $('#vmap').css('background-image','url("./img/Russia-map-1696.png")')
    } else if(val >= 2475 && val < 2475 + (7.23 * 15) ){
      $(".year span").text("1697")
    } else if(val >= 2475 && val < 2475 + (7.23 * 16) ){
      $(".year span").text("1698")
    } else if(val >= 2475 && val < 2475 + (7.23 * 17) ){
      $(".year span").text("1699")
    } else if(val >= 2475 && val < 2475 + (7.23 * 18) ){
      $(".year span").text("1700")
    } else if(val >= 2475 && val < 2475 + (7.23 * 19) ){
      $(".year span").text("1701")
    } else if(val >= 2475 && val < 2475 + (7.23 * 20) ){
      $(".year span").text("1702")
    } else if(val >= 2475 && val < 2475 + (7.23 * 21) ){
      $(".year span").text("1703")
    } else if(val >= 2475 && val < 2475 + (7.23 * 22) ){
      $(".year span").text("1704")
    } else if(val >= 2475 && val < 2475 + (7.23 * 23) ){
      $(".year span").text("1705")
    } else if(val >= 2475 && val < 2475 + (7.23 * 24) ){
      $(".year span").text("1706")
    } else if(val >= 2475 && val < 2475 + (7.23 * 25) ){
      $(".year span").text("1707")
    } else if(val >= 2475 && val < 2475 + (7.23 * 26) ){
      $(".year span").text("1708")
    } else if(val >= 2475 && val < 2475 + (7.23 * 27) ){
      $(".year span").text("1709")
    } else if(val >= 2475 && val < 2475 + (7.23 * 28) ){
      $(".year span").text("1710")
    } else if(val >= 2475 && val < 2475 + (7.23 * 29) ){
      $(".year span").text("1711")
    } else if(val >= 2475 && val < 2475 + (7.23 * 30) ){
      $(".year span").text("1712")
    } else if(val >= 2475 && val < 2475 + (7.23 * 31) ){
      $(".year span").text("1713")
      $('#vmap').css('background-image','url("./img/Russia-map-1713.png")')
    } else if(val >= 2475 && val < 2475 + (7.23 * 32) ){
      $(".year span").text("1714")
    } else if(val >= 2475 && val < 2475 + (7.23 * 33) ){
      $(".year span").text("1715")
    } else if(val >= 2475 && val < 2475 + (7.23 * 34) ){
      $(".year span").text("1716")
    } else if(val >= 2475 && val < 2475 + (7.23 * 35) ){
      $(".year span").text("1717")
    } else if(val >= 2475 && val < 2475 + (7.23 * 36) ){
      $(".year span").text("1718")
    } else if(val >= 2475 && val < 2475 + (7.23 * 37) ){
      $(".year span").text("1719")
    } else if(val >= 2475 && val < 2475 + (7.23 * 38) ){
      $(".year span").text("1720");
      $(".container .svg > span.end a").removeClass("visible");
    } else if(val >= 2475 && val < 2475 + (7.23 * 39) ){
      $(".year span").text("1721");
      $(".container .svg > span.end a").addClass("visible");
      $(".details > div").hide()
      $(".details > div").eq(13).show()
    }
  drawTween.progress(lastLength / pathLength);

  return p.point;
}

function closestPoint(pathNode, pathLength, point) {
  var precision = 1,
    best,
    bestLength,
    bestDistance = Infinity;
  var traveled = distance2sqrt(lastPoint);
  var scanFrom = lastLength - traveled;
  var scanTo = lastLength + traveled;
  scanFrom = scanFrom < 0 ? 0 : scanFrom;

  if (traveled * 2 < 20) {
    scanTo = scanFrom + 20;
  }

  scanTo = scanTo > pathLength ? pathLength : scanTo;

  // console.log(scanTo - scanFrom);
  // linear scan for coarse approximation
  for (
    var scan, scanLength = scanFrom, scanDistance;
    scanLength <= scanTo;
    scanLength += precision
  ) {
    if (
      (scanDistance = distance2(
        (scan = pathNode.getPointAtLength(scanLength))
      )) < bestDistance
    ) {
      (best = scan), (bestLength = scanLength), (bestDistance = scanDistance);
    }
  }


  var len2 = bestLength + (bestLength === pathLength ? -0.1 : 0.1);
  var rotation = getRotation(best, pathNode.getPointAtLength(len2));

  return {
    point: best,
    rotation: rotation * DEG,
    // distance: Math.sqrt(bestDistance),
    length: bestLength
  };

  function distance2(p) {
    var dx = p.x - point.x,
      dy = p.y - point.y;
    return dx * dx + dy * dy;
  }

  function distance2sqrt(p) {
    var dx = p.x - point.x,
      dy = p.y - point.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

function getRotation(p1, p2) {
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;
  return Math.atan2(dy, dx);
}
