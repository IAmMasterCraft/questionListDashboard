/**
 * 
 * @param {Object} textToImage 
 */
const textImage = TextImage();

/**
 * Welcome user
 */

const setWelcome = (domSelector) => {
    $(domSelector).text(welcomeUser());
}

/**
 * Nav active link manager
 */

const setActiveNav = (hashedLink) => {
    const navItems = $(".nav-item");
    navItems.map((index, element) => {
        // if ()
    });
}

/**
 * empty dom content
 */

const emptyDomObject = (selector) => {
    $(selector).empty();
}

/**
 * notification
 */

const loadingNotification = (title, content) => {
    swal({
        title: title,
        text: content,
        content: {
            element: "img",
            attributes: {
                src: "../pages/ajax-loader.gif",
            },
        },
        button: {
            visible: false,
        },
        closeOnClickOutside: false,
        closeOnEscape: false,
    });
}

const forceCloseSwal = () => {
    swal.close();
    const swalObject = swal.getState();
    if (swalObject.isOpen) {
        forceCloseSwal();
    }
}

const tmaServiceElement = (info, url) => {
    const element = `<div class="col-lg-3 col-md-6 col-sm-6 col-12">
    <a href="${(url.includes('past_question')) ? 'https://iammastercraft.github.io/questionList/examPrep/start.html' : url}">
        <div class="card card-statistic-1">
        <div class="card-icon bg-${pickRandomColor()}">
            <i class="${randomQuestionIcon()}"></i>
        </div>
        <div class="card-wrap">
            <div class="card-header">
                <h4></h4>
            </div>
            <div class="card-body">
            ${info}
            </div>
        </div>
        </div>
    </a>
  </div>`;

    return element;
}

const tmaCourseElement = (info, url) => {
    const element = `<tr><td>
    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <a href="${url}">
            <div class="card card-statistic-1">
            <div class="card-icon bg-${pickRandomColor()}">
                <i class="${randomQuestionIcon()}"></i>
            </div>
            <div class="card-wrap">
                <div class="card-header">
                    <h4></h4>
                </div>
                <div class="card-body">
                ${info}
                </div>
            </div>
            </div>
        </a>
    </div>
  </td></tr>`;

    return element;
}

const tmaQuestionElement = (info, _img="") => {
    // const img = textImage.toImage(info);
    const data = textImage.toDataURL(_img)
    const element = `<div class="col-lg-12 col-md-12 col-sm-12 col-12">
    <div class="card card-statistic-1">
        <div class="card-wrap" id="tma_${Date.now()}">
            <div class="card-header">
                <h4>${getRoute().split("/")[2]}</h4>
            </div>
            <div class="card-body">
                <img style="max-width: 90%" class="img-responsive" src="${data}"/>
                <div>${info}</div>
                <span class="copyright text-${pickRandomColor()}">@IAmMasterCraft <i class="fas fa-laptop-code"></i></span>
            </div>
        </div>
  </div>`;

    return element;
}

const loginElement = () => {
    const element = `
    <div class="login-form">
        <h2 class="text-center">In case you are wondering how to get a passcode? send a message to 08097691684 on WhatsApp</h2>
        <div class="form-group">
            <input type="text" id="passcode" class="form-control password" placeholder="Enter Passcode" required="required">
        </div>
        <div class="form-group">
            <button class="btn btn-primary btn-block" onclick="grantAccess()">Log in</button>
        </div>
    </div>
    `;
    return element;
}

const loginToDom = () => {
    $(".table-responsive").hide();
    $("#parent").append(loginElement);
}

const tmaLinksToDom = () => {
    $(".table-responsive").hide();
    getTmaLinks().then((tma) => {
        tma.map((session) => {
            const info = session.replace(/_/g, " ").toUpperCase();
            $("#parent").append(tmaServiceElement(`${info}`, `#questions/${session}/login`));
        });
        forceCloseSwal();
    });
}

const courseCodeToDom = async() => {
    const courseCodes = await getListedCourses();
    courseCodes.map((course) => {
        $("#course-body").append(tmaCourseElement(course, `#${getRoute()}/${course}`));
    });
    $(".table-responsive").show();
    $('#tma-course').DataTable();
}

const splitInFive = (text) => {
    const splitted = text.split(" ");
    let count = Math.ceil(splitted.length/5);
    if ((splitted.length % 5 != 0) && ((count * 5) < splitted.length)) count++;
    const result = splitted.map((a, i)=> {
        let res = a;
        if (i % count === 0 && i !== 0) res += `\n`;
        return res;
    }).join(" ");
    
    return result;
}

const questionsToDom = () => {
    $(".table-responsive").hide();
    getTmaQuestions().then((questions) => {
        questions.map((question, index) => {
            let element = question
                .replace(/ \[op/g, "")
                .replace(/op\] /g, "")
                .replace(/\n/g, "<br>");
            element = element.split(" @@@ ");
            const img_info = 
`
\n
${getRoute().split("/")[2]}/@IAmMasterCraft
\n
${index + 1}). ${splitInFive(element[0].replace("<br>", ""))}
\n
------------------------------
${getRoute().split("/")[2]} >> Correct Answer: ${element[2].replace("<br>", "")}  
------------------------------
\n\n
`
            $("#parent").append(tmaQuestionElement(
                `******
                `, img_info
            ));
        });
        forceCloseSwal();
    });
}