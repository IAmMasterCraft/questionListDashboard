

Object.objsize = function (Myobj) {
  let osize = 0,
    key;
  for (key in Myobj) {
    if (Myobj.hasOwnProperty(key)) osize++;
  }
  return osize;
};

const getTmaLinks = async () => {
  const tmaLinks = [];
  await $.get(
    "https://firestore.googleapis.com/v1beta1/projects/exam-76c31/databases/(default)/documents/links/tma",
    (result, status, xhr) => {
      const allResult = Object.objsize(result["fields"]);
      for (let index = 0; index < allResult; index++) {
        const element = result["fields"][index];
        tmaLinks.push(element["stringValue"]);
      }
      tmaLinks.push("past_questions");
    }
  );

  return await tmaLinks;
};

const getListedCourses = async () => {
  return await allCourses;
}

const getTmaQuestions = async () => {
    const tmaQuestions = [];
    const url = `https://firestore.googleapis.com/v1beta1/projects/exam-76c31/databases/(default)/documents/${getRoute().replace("questions/", "")}`;
    await $.get(url, (result) => {
        const allResult = Object.objsize(result["fields"]);
        for (let index = 0; index < allResult; index++) {
            const element = result["fields"][`question${index + 1}`];
            tmaQuestions.push(element["stringValue"]);
        }
    });
    return await tmaQuestions;
}
