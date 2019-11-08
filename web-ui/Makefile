
#
# Paths
#

SUBDIRS := cgi

all:
	for i in ${SUBDIRS}; do \
		(cd $$i; make) || exit 1; \
	done

clean:
	for i in ${SUBDIRS}; do \
		(cd $$i; make clean); \
	done