var count = 1;
const isFloat = (n) => {
  return Number(n) === n && n % 1 !== 0 && parseInt(n) !== n;
}

const dataRenderInTable = (cardTitle, TotalValue) => {
  const table = document.getElementById('table');
  const tr = document.createElement('tr');
  var render = isFloat(TotalValue) ? TotalValue.toFixed(2) : TotalValue
  var TotalValue = '<span>' + render + '</span>' + " cm<sup>2</sup>"
  tr.innerHTML = `
      <td>${count}</td>
      <td>${cardTitle}</td>
      <td class="area">${TotalValue}</td>
      <td><button id="convertbutton" class="btn btn-primary" onclick="convertToMeterSqure(this)">Convert to m<sup style="color:white">2</sup></button></td>
      `;
  table.appendChild(tr);
  count++;
}
const convertTocmSqure = (e) => {
  let incm = parseFloat(e.parentNode.parentNode.querySelector(".area").querySelector("span").innerText)
  let inMeter = incm * (100 * 100);
  var render = isFloat(inMeter) ? inMeter.toFixed(2) : inMeter
  e.parentNode.parentNode.querySelector(".area").innerHTML = '<span>' + render + '</span>' + " cm<sup>2</sup>"
  e.setAttribute("onclick", "convertToMeterSqure(this)")
  e.innerHTML = 'Convert to m<sup style="color:white">2</sup>'
}

const convertToMeterSqure = (e) => {
  let incm = parseFloat(e.parentNode.parentNode.querySelector(".area").querySelector("span").innerText)
  let inMeter = incm / (100 * 100);
  e.parentNode.parentNode.querySelector(".area").innerHTML = '<span>' + inMeter + '</span>' + " m<sup>2</sup>"
  e.setAttribute("onclick", "convertTocmSqure(this)")
  e.innerHTML = 'Convert to cm<sup style="color:white">2</sup>'

}


const areaOfTriangleOrPentagonOrRhombus = (a, b) => {
  return .5 * a * b;
}
const areaOfReactangleOrParallelogram = (a, b) => {
  return a * b;
}
const areaOfEllipse = (a, b) => {
  return 3.1416 * a * b;
}

const inputValidation = (a, b) => {
  if (a >= 0 && !isNaN(a) && !isNaN(b) && a != "" && b != "") {
    return true;
  } else {
    false;
  }
}

const calculateButtonHandler = (e) => {
  let input = document.getElementById(e.id).parentNode.parentNode.querySelector(".input-box").querySelectorAll("input");
  let a = input[0].value;
  let b = input[1].value;
  let area = -1;
  console.log(a)
  console.log(b)
  console.log(isNaN(a))
  if (!inputValidation(a, b)) {
    document.getElementById("modalbuttonopen").click();
    return area;
  }
  a = parseFloat(a);
  b = parseFloat(b);
  if (e.id == "Triangle") {
    area = areaOfTriangleOrPentagonOrRhombus(a, b);
  } else if (e.id == "Rectangle") {
    area = areaOfReactangleOrParallelogram(a, b);
  } else if (e.id == "Parallelogram") {
    area = areaOfReactangleOrParallelogram(a, b);
  }
  else if (e.id == "Rhombus") {
    area = areaOfTriangleOrPentagonOrRhombus(a, b);
  }
  else if (e.id == "Pentagon") {
    area = areaOfTriangleOrPentagonOrRhombus(a, b);
  }
  else if (e.id == "Ellipse") {
    area = areaOfReactangleOrParallelogram(a, b);
  }
  dataRenderInTable(e.id, area);
  return area;

}




const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



document.querySelectorAll(".area-box").forEach(elem => {
  elem.addEventListener('mouseenter', function (e) {
    e.stopPropagation();
    this.style.backgroundColor = getRandomColor();

  });

  elem.addEventListener('mouseleave', function (e) {
    this.style.backgroundColor = "#fff";
  });
});

const readMoreFunction = (e) => {
  let title = e.parentNode.querySelector("h5").innerText;
  let body = e.parentNode.querySelector("p").innerText;
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalBody").innerText = body;

}
