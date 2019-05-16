// Description variables:
//     - activePage          - current active page
//     - objectsCountPerPage - quantity objects per page (default 10)
//     - pageRangeDisplayed  - quantity pages for display pagination (default 5)
//     - totalObjectCount    - total quantity objects

// Paginator constructor
//
// 'objectsCountPerPage' is the number of objects per page,
// 'countPagesPagination' is the number of pages to display.
// They default to '10' and '5' respectively.
function Paginator(objectsCountPerPage, countPagesPagination) {
    // You really should be calling this with 'new Paginator', but WHATEVER.
    if (!(this instanceof Paginator)) {
      return new Paginator(objectsCountPerPage, countPagesPagination);
    }

    // Defaults
    this.objectsCountPerPage = objectsCountPerPage || 10;
    this.countPagesPagination = countPagesPagination || 5;
}

// Build an object with all the necessary information for outputting pagination controls.
Paginator.prototype.build = function(totalObjectsCount, activePage) {
    // We want the number of pages, rounded up to the nearest page.
    let totalPages = Math.ceil(totalObjectsCount / this.objectsCountPerPage);

    // Additional control
    //
    // Ensure both total_results and current_page are treated as Numbers
    totalObjectsCount = parseInt(totalObjectsCount, 10);
    activePage        = parseInt(activePage, 10) || 1;

    // Obviously we can't be on a negative or 0 page.
    if (activePage < 1) {
        activePage = 1;
    }

    // If the user has done something like /page/99999 we want to clamp that back down.
    if (activePage > totalPages) {
        activePage = totalPages;
    }

    // This is the first page to be displayed as a numbered link.
    let firstPage = Math.max(1, activePage - Math.floor(this.countPagesPagination / 2));

    // And here's the last page to be displayed specifically.
    let lastPage = Math.min(totalPages, activePage + Math.floor(this.countPagesPagination / 2));

    // This is triggered if we're at or near one of the extremes; we won't have
    // enough page links. We need to adjust our bounds accordingly.
    if (lastPage - firstPage + 1 < this.countPagesPagination) {
        if (activePage < (totalPages / 2)) {
            lastPage = Math.min(totalPages, lastPage + (this.countPagesPagination - (lastPage - firstPage)));
        } else {
            firstPage = Math.max(1, firstPage - (this.countPagesPagination - (lastPage - firstPage)));
        }
    }

    // This can be triggered if the user wants an odd number of pages.
    if (lastPage - firstPage + 1 > this.countPagesPagination) {
        // We want to move towards whatever extreme we're closest to at the time.
        if (activePage > (totalPages / 2)) {
            firstPage++;
        } else {
            lastPage--;
        }
    }

    return {
        totalPages: totalPages,
        activePage: activePage,
        firstPage: firstPage,
        lastPage: lastPage,
        previousPage: activePage - 1,
        nextPage: activePage + 1,
        hasPreviousPage: activePage > 1,
        hasNextPage: activePage < totalPages,
        totalObjectsCount: totalObjectsCount
    };
}

module.exports = Paginator;