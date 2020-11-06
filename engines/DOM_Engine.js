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

const tmaQuestionElement = (info) => {
    const element = `<div class="col-lg-12 col-md-12 col-sm-12 col-12">
    <div class="card card-statistic-1">
        <div class="card-wrap">
            <div class="card-header">
                <h4></h4>
            </div>
            <div class="card-body">
                <div>${info}</div>
                <span class="copyright text-${pickRandomColor()}">@IAmMasterCraft <i class="fas fa-laptop-code"></i></span>
            </div>
        </div>
  </div>`;

  return element;
}

const tmaLinksToDom = () => {
    getTmaLinks().then((tma) => {
        tma.map((session) => {
            const info = session.replace(/_/g, " ").toUpperCase();
            $("#parent").append(tmaServiceElement(info, `#questions/${session}`));
        });
        forceCloseSwal();
    });
}

const courseCodeToDom = async () => {
    getListedCourses().then((courseCodes) => {
        courseCodes.map((course) => {
            $("#course-body").append(tmaCourseElement(course, `#${getRoute()}/${course}`));
        });
        $('#tma-course').DataTable();
        $(".table-responsive").show();
    });
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
            $("#parent").append(tmaQuestionElement(`${index + 1}). ${element[0]} <br> ${element[1]} <br><b> Correct Answer: <u>${element[2]}</u> </b>`));
        });
        forceCloseSwal();
    });
}