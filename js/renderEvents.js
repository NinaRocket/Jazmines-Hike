document.addEventListener('DOMContentLoaded', () => {
    fetch('/data/events.json')
      .then(res => res.json())
      .then(events => {
        const container = document.getElementById('event-details-container');
        const calendarEl = document.getElementById('calendar');
  
        // STEP 1: Render event details below the calendar
        events.forEach(event => {
          const div = document.createElement('div');
          div.classList.add('container', 'centerText');
  
          let listHtml = '';
          if (event.listItems && Array.isArray(event.listItems)) {
            listHtml = `
              <ul style="text-align:left;">
                ${event.listItems.map(item => `<li>${item}</li>`).join('')}
              </ul>
            `;
          }
  
          div.innerHTML = `
            <a class="anchor" id="${(event.url || '#'+event.id).replace('#','')}"></a>

            <div style="text-align:center;">
              <img src="${event.postImage}" style="width:200px;border-radius: 20px;" alt="${event.postTitle}">
            </div>
            <p>${event.date} ${event.time ? `| ${event.time}` : ''}</p>
            <p class="event-titles">${event.postTitle}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <div class="section-text" style="font-size:18px;">
              ${event.description.map(p => `<p>${p}</p>`).join('')}
              ${listHtml}
            </div>
            <a style="font-size:22px;text-align:center;" href="${event.linkUrl}" target="_blank"><strong>${event.linkText}</strong></a>
            <hr>
          `;
          container.appendChild(div);
        });
  
        // STEP 2: Create FullCalendar events from JSON
        const fullCalendarEvents = events.map(event => ({
          title: event.title,
          start: event.start,
          end: event.end || null,
          textColor: event.textColor || 'black',
          backgroundColor: event.backgroundColor || 'white',
          borderColor: event.borderColor || 'white',
          classNames: event.classNames || '',
          url: event.url || `#${event.id}`,
          image_url: event.image
        }));
  
        // STEP 3: Render FullCalendar
        if (calendarEl) {
          const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'listYear',
            contentHeight: "auto", 
            //headerToolbar: false,
            events: fullCalendarEvents,
            eventContent: function(arg) {
              let arrayOfDomNodes = [];
              let anchorElement = document.createElement('a');
              anchorElement.href = arg.event.url;
              anchorElement.style.display = 'flex';
              anchorElement.style.alignItems = 'center';
              
  
              if (arg.event.title) {
                let titleDiv = document.createElement('div');
                titleDiv.innerHTML = arg.event.title;
                // titleDiv.classList = "fc-event-title fc-sticky";
                titleDiv.className = "fc-event-title";

                anchorElement.appendChild(titleDiv);
              }
  
              if (arg.event.extendedProps.image_url) {
                let img = document.createElement('img');
                img.src = arg.event.extendedProps.image_url;
                img.classList = "fc-event-img";
                anchorElement.appendChild(img);
              }
  
              arrayOfDomNodes.push(anchorElement);
              return { domNodes: arrayOfDomNodes };
            },
            eventTimeFormat: {
              hour: 'numeric',
              minute: '2-digit',
              meridiem: 'short',
            }
          });
  
          calendar.render();
        }
      });
  });
  